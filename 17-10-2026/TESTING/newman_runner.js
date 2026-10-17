const { spawn } = require('child_process');
const newman = require('newman');

// 1. Start your Node.js server gracefully
// Replace 'app.js' with your server's actual entry point
const server = spawn('node', ['app.js'], { stdio: 'inherit' });

console.log('🚀 Server started. Waiting for initialization...');

// Give the server 3 seconds to boot up before running tests
setTimeout(() => {
  console.log('🧪 Running Newman tests...');

  // 2. Run Newman programmatically
  newman.run({
    collection: require('./ordersCollection.json'),
    environment: require('./test_environment.json'),
    reporters: 'htmlextra'
  }, (err, summary) => {
    
    // 3. Gracefully stop the server once Newman finishes
    console.log('🛑 Tests complete. Stopping server gracefully...');
    
    server.on('close', (code) => {
      console.log(`Server process exited with code ${code}`);
      process.exit(err || summary.run.failures.length ? 1 : 0);
    });

    // Send the kill signal to the server process
    server.kill('SIGTERM'); 
  });

}, 3000); 
