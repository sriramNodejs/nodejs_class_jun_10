import { MongoClient } from "mongodb";

const uri = "mongodb://root:secretpassword@localhost:27013/?authSource=admin";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const db = client.db("test_hello");

  // Create new collection with schema validator
  await db.createCollection("employee_documents", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["employee_id", "docType", "docNumber", "issuedOn", "status"],
        properties: {
          employee_id: { bsonType: "objectId" },
          docType: { enum: ["Passport", "Aadhaar", "PAN", "DrivingLicense"] },
          docNumber: { bsonType: "string", minLength: 4 },
          issuedOn: { bsonType: "date" },
          expiryOn: { bsonType: ["date", "null"] },
          status: { enum: ["Active", "Expired", "Revoked"] },
        },
      },
    },
    validationLevel: "strict",
    validationAction: "error",
  });

  // Valid insert
  await db.collection("employee_documents").insertOne({
    employee_id: new (await import("mongodb")).ObjectId(
      "6a37b8dc74c5f211f19df8a3",
    ),
    docType: "Passport",
    docNumber: "P1234567",
    issuedOn: new Date("2022-01-10"),
    expiryOn: new Date("2032-01-09"),
    status: "Active",
  });

  // Invalid insert example (will throw MongoServerError code 121)
  try {
    await db.collection("employee_documents").insertOne({
      employee_id: "6a37b8dc74c5f211f19df8a3", // wrong type
      docType: "VoterID", // not in enum
      docNumber: 12345, // wrong type
      issuedOn: new Date(),
      status: "Active",
    });
  } catch (err) {
    console.log(err);
    console.log("Validation failed as expected:", err.code, err.message);
  }

  await client.close();
}

run().catch(console.error);
