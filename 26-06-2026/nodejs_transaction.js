import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(
  "mongodb://localhost:27017",
);

async function run() {
  await client.connect();
  const db = client.db("test");
  const session = client.startSession();

  try {
    await session.withTransaction(async () => {
      await db
        .collection("performance_reviews")
        .updateOne(
          {
            employee_id: new ObjectId("6a37b8dc74c5f211f19df8a3"),
            reviewYear: 2023,
          },
          { $inc: { bonus: -1000 } },
          { session },
        );

      await db
        .collection("performance_reviews")
        .updateOne(
          {
            employee_id: new ObjectId("6a37b8dc74c5f211f19df8a4"),
            reviewYear: 2023,
          },
          { $inc: { bonus: 1000 } },
          { session },
        );

      await db.collection("bonus_transfers").insertOne(
        {
          fromEmployee: new ObjectId("6a37b8dc74c5f211f19df8a3"),
          toEmployee: new ObjectId("6a37b8dc74c5f211f19df8a4"),
          amount: 1000,
          createdAt: new Date(),
        },
        { session },
      );
    });

    console.log("Transaction committed");
  } catch (err) {
    console.error("Transaction failed:", err.message);
  } finally {
    await session.endSession();
    await client.close();
  }
}

run();
