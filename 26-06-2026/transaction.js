import { MongoClient } from 'mongodb';

// Note the '?replicaSet=rs0' query parameter—this is required for transactions!
const uri = "mongodb://localhost:27017/?replicaSet=rs0";
const client = new MongoClient(uri);

async function runTransactionPractice() {
  try {
    await client.connect();
    const db = client.db('company_db');
    
    const employeesCollection = db.collection('employees');
    const auditCollection = db.collection('audit_logs');

    // 1. Start the session
    const session = client.startSession();

    try {
      // 2. Start the multi-document transaction
      session.startTransaction();
      console.log("Transaction started...");

      // Operation A: Insert a valid employee matching your schema
      const newEmployee = {
        name: "Sarah Connor",
        age: 42, // Must be NumberInt in production, but driver auto-maps plain integers well
        salary: 85000,
        department: "Finance",
        status: "Active",
        address: { city: "Los Angeles", state: "California", country: "USA" },
        projects: [{ name: "Cyberdyne Audit", budget: 50000 }],
        joiningDate: new Date()
      };

      await employeesCollection.insertOne(newEmployee, { session });
      console.log("Step A: Employee document staged inside transaction.");

      // Operation B: Insert a corresponding log file entry
      const logEntry = {
        action: "EMPLOYEE_CREATION",
        target: "Sarah Connor",
        timestamp: new Date()
      };

      await auditCollection.insertOne(logEntry, { session });
      console.log("Step B: Audit log staged inside transaction.");

      // 3. Commit everything to the database permanently
      await session.commitTransaction();
      console.log("Success! Transaction successfully committed to disk.");

    } catch (error) {
      console.error("Transaction aborted due to an error. Rolling back changes...", error.message);
      // Aborting cancels all staged actions so your data stays clean
      await session.abortTransaction();
    } finally {
      // Always close your sessions
      await session.endSession();
    }

  } finally {
    await client.close();
  }
}

runTransactionPractice().catch(console.dir);
