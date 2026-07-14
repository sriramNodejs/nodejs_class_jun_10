import { MongoClient } from 'mongodb';

// Connection URI must include the replicaSet parameter
const uri = "mongodb://localhost:27017/?replicaSet=rs0";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    const db = client.db('hr_system');
    
    // Setup collections
    const employees = db.collection('employees');
    const auditLogs = db.collection('audit_logs');

    // 1. Setup your strict validation schema if it doesn't exist
    try {
      await db.createCollection("employees", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["name", "age", "address", "projects", "joiningDate"],
            properties: {
              name: { bsonType: "string", minLength: 2 },
              age: { bsonType: "int", minimum: 18, maximum: 70 },
              salary: { bsonType: ["int", "double", "long", "decimal"], minimum: 0 },
              department: { enum: ["IT", "HR", "Finance", "Marketing"] },
              status: { enum: ["Active", "Inactive"] },
              address: {
                bsonType: "object",
                required: ["city", "state", "country"],
                properties: {
                  city: { bsonType: "string" },
                  state: { bsonType: "string" },
                  country: { bsonType: "string" }
                }
              },
              projects: {
                bsonType: "array",
                minItems: 1,
                items: {
                  bsonType: "object",
                  required: ["name", "budget"],
                  properties: {
                    name: { bsonType: "string" },
                    budget: { bsonType: ["int", "double", "long", "decimal"], minimum: 0 }
                  }
                }
              },
              joiningDate: { bsonType: "date" }
            }
          }
        },
        validationLevel: "strict",
        validationAction: "error"
      });
      console.log("Collection 'employees' created with strict schema validation.");
    } catch (e) {
      console.log("Collection 'employees' already exists. Proceeding...");
    }

    // ==========================================
    // 2. EXECUTE MULTI-DOCUMENT TRANSACTION
    // ==========================================
    const session = client.startSession();

    try {
      await session.withTransaction(async () => {
        console.log("\n--- Transaction Started ---");

        // Document A: Valid employee document parsing your rules
        const newEmployee = {
          name: "John Doe",
          age: 19, // Node driver automatically encodes standard integers appropriately
          salary: 60000,
          department: "IT",
          status: "Active",
          address: { city: "Hyderabad", state: "Telangana", country: "India" },
          projects: [{ name: "Migration Project", budget: 15000 }],
          joiningDate: new Date()
        };

        await employees.insertOne(newEmployee, { session });
        console.log("Step 1: Valid employee added to transaction stage.");

        // Document B: Relational audit tracking entry
        const logEntry = {
          action: "CREATE_EMPLOYEE",
          employeeName: "John Doe",
          performedBy: "Admin",
          timestamp: new Date()
        };

        await auditLogs.insertOne(logEntry, { session });
        console.log("Step 2: Audit logs added to transaction stage.");
        console.log("--- Committing Transaction ---");
      });

      console.log("Transaction successfully written to disk permanently!\n");

    } catch (txError) {
      console.error("\n[X] Transaction aborted automatically by driver:", txError.message);
      console.log("Result: Both data modifications were completely rolled back.");
    } finally {
      await session.endSession();
    }

  } finally {
    await client.close();
  }
}

main().catch(console.dir);


/*
How to test data rollback (Failure Scenario)
To witness the transaction roll back changes automatically, modify the newEmployee data structure to break your schema constraints:
Change "age": 35 to "age": 12 (violates minimum: 18).
*/