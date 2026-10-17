const express = require("express");
const { createClient } = require("redis");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

// 1. Initialize and configure the Redis Client
const redisClient = createClient({
  url: process.env.REDIS_URL,
  // Force the client to use RESP2 protocol instead of RESP3
  protocolVersion: 2,
});

redisClient.on("error", (err) => console.error("Redis Client Error:", err));

// Connect to Redis explicitly before booting up Express
redisClient.connect().then(() => {
  console.log("🔗 Connected to Redis successfully");
});

const cache = [];

app.get("/heavy-task", (req, res) => {
  const query = Number(req.query.num || 10);

  if (cache[query]) {
    return res.json({ output: cache[query] });
  }

  // mimicking heaviy computation
  let output = 0;
  for (var i = 0; i < 999999999; i++) {
    output += i;
  }

  output += query;

  cache[query] = output;

  res.json({ output });
});



// 2. [SET EXAMPLE] Middleware: Track total API requests using a simple String counter
app.use(async (req, res, next) => {
    try {
        // INCR automatically initializes the key to 0 if it doesn't exist, then increments it
        // This acts exactly like a SET command with numerical mutations under the hood
        const totalRequests = await redisClient.incr('metrics:total_requests');
        console.log(`[Metrics] Global API request count: ${totalRequests}`);
        next();
    } catch (error) {
        console.error('Metrics Middleware Error:', error);
        next(); // Move to the next middleware even if Redis logging fails
    }
});




// 3. [HSET EXAMPLE] Route: Create or update a user profile
// Post Payload: { "name": "Alice Smith", "email": "alice@example.com", "role": "admin" }
app.post('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { name, email, role } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required fields' });
    }

    try {
        const redisKey = `user:${userId}`;

        // HSET takes an object and maps it directly into field-value pairs inside Redis
        await redisClient.hSet(redisKey, {
            name: name,
            email: email,
            role: role || 'user',
            updatedAt: new Date().toISOString()
        });

        // Optional: Set the user profile record to expire out of cache after 1 hour (3600 seconds)
        await redisClient.expire(redisKey, 3600);

        return res.status(201).json({ 
            message: `User profile ${userId} saved successfully in Redis cache.` 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to save user profile' });
    }
});


// 4. [HGETALL/HGET EXAMPLE] Route: Retrieve a user profile
app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const redisKey = `user:${userId}`;

        // hGetAll pulls the entire hash maps it back into a native JavaScript Object
        const userProfile = await redisClient.hGetAll(redisKey);

        // If the hash doesn't exist, Redis returns an empty object {}
        if (Object.keys(userProfile).length === 0) {
            return res.status(404).json({ error: `User ${userId} not found or expired.` });
        }

        // Alternatively, if you only wanted a specific field instead of everything:
        // const role = await redisClient.hGet(redisKey, 'role');

        return res.json({ userId, profile: userProfile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to retrieve user profile' });
    }
});


// 5. Route: Get total API requests metric (Demonstrating GET string value)
app.get('/metrics', async (req, res) => {
    try {
        const total = await redisClient.get('metrics:total_requests');
        return res.json({ total_api_requests: total || 0 });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch metrics' });
    }
});


// ==========================================
// [SET STRING EXAMPLE] Route: Save a configuration string
// Post Payload: { "value": "true" } or { "value": "maintenance_mode" }
// ==========================================
app.post('/config/:key', async (req, res) => {
    const configKey = req.params.key;
    const { value } = req.body;

    // String values in Redis must be strings or numbers
    if (value === undefined || value === null) {
        return res.status(400).json({ error: 'A text "value" field is required in the body' });
    }

    try {
        const redisKey = `config:${configKey}`;

        // Basic SET operation storing a raw string
        // We can pass an optional configuration object to set an expiration if desired
        await redisClient.set(redisKey, String(value), {
            EX: 86400 // Optional: Automatically expires this configuration string in 24 hours
        });

        return res.status(200).json({ 
            message: `Configuration string successfully saved.`,
            key: redisKey,
            value: value
        });
    } catch (error) {
        console.error('Redis SET Error:', error);
        return res.status(500).json({ error: 'Failed to set configuration string' });
    }
});


// ==========================================
// [GET STRING EXAMPLE] Route: Retrieve a configuration string
// ==========================================
app.get('/config/:key', async (req, res) => {
    const configKey = req.params.key;

    try {
        const redisKey = `config:${configKey}`;

        // Basic GET operation to retrieve the string value
        const configValue = await redisClient.get(redisKey);

        // If a key doesn't exist under GET, Redis returns null
        if (configValue === null) {
            return res.status(404).json({ 
                error: `Configuration key "${configKey}" not found or expired.` 
            });
        }

        return res.json({ 
            key: configKey, 
            value: configValue 
        });
    } catch (error) {
        console.error('Redis GET Error:', error);
        return res.status(500).json({ error: 'Failed to retrieve configuration string' });
    }
});

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
