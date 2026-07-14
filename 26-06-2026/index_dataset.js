const express = require("express");
const { MongoClient, ObjectId, ISODate } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = "test_db";

const Users_collection = "users";
const Emp_Collection = "employees";
const Review_Collection = "performance_reviews";

let db;

MongoClient.connect(MONGO_URI)
  .then((client) => {
    db = client.db(DB_NAME);
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("err in db connection", err);
  });

//
// C -> Create
// R -> Read
// U -> Update
// D -> Delete

app.get("/users", async (req, res, next) => {
  try {
    const employees = db.collection(Emp_Collection);
    db.employees = employees; // patching
    const performance_reviews = db.collection(Review_Collection);
    db.performance_reviews = performance_reviews;

    // find with name
    // db.employees.findOne({ name: "John Doe" })

    // find with selected keys
    // db.employees.find(
    //     { name: "John Doe" },
    //     { _id: 0, name: 1, address: 1, projects: 1, joiningDate: 1 }
    // ).toArray();

    // Employees in Hyderabad
    // db.employees.find({ "address.city": "Hyderabad" }).toArray();

    //  Employees joined after Jan 1, 2023

    // db.employees.find({ joiningDate: { $gte: ISODate("2023-01-01") } })  // for shell command

    // db.employees.find({ joiningDate: { $gte: new Date("2023-01-01") } })  // programmetically

    // Employees who worked on CRM Portal project
    // db.employees.find({ "projects.name": "CRM Portal" })
    // db.employees.find({ "projects.name": "HR Portal" })

    // 30-06-2026
    // UPDATE
    // update to secundrabad

    // db.employees.updateOne(
    //     { name: "John Doe" },
    //     { $set: { "address.city": "Secunderabad" } }
    //     )

    // Add a new project
    // db.employees.updateOne(
    //     { name: "John Doe" },
    //     { $push: { projects: { name: "Support Dashboard", budget: 30000 } } }
    // )

    // Update budget of a specific project (CRM Portal)

    // db.employees.updateOne(
    //     { name: "John Doe", "projects.name": "CRM Portal" },
    //     { $set: { "projects.$.budget": 90000 } }
    // );

    // Update joining date

    // programmatically
    // db.employees.updateOne(
    //     { name: "John Doe" },
    //     { $set: { joiningDate: new Date("2023-02-01") } }
    // );

    // shell command
    // db.employees.updateOne(
    //     { name: "John Doe" },
    //     { $set: { joiningDate: ISODate("2023-02-01") } }
    // );

    // Remove a project from array
    // db.employees.updateOne(
    //     { name: "John Doe" },
    //     { $pull: { projects: { name: "Inventory System" } } }
    // )

    // Delete employee document
    // db.employees.deleteOne({ name: "Aarav Mehta" })

    // Delete many employees joined before 2021
    // db.employees.deleteMany({ joiningDate: { $lt: ISODate("2021-01-01") } })
    // db.employees.deleteMany({ joiningDate: { $lt: new Date("2021-01-01") } })

    // Find all employees from Hyderabad
    // db.employees.find({ "address.city": "Hyderabad" }, { _id: 0, name: 1, "address.city": 1 })  // it is for shell command

    // projection
    // we can get what is the required keys

    // db.employees.find(
    //     { "address.city": "Hyderabad" }
    //     ,
    //     { projection:
    //         { _id: 0, name: 1, "address.city": 1 }
    //     }).toArray();

    // Find employees who joined in 2024
    // shell command
    // db.employees.find({ joiningDate: { $gte: ISODate("2024-01-01"), $lt: ISODate("2025-01-01") } }, { _id: 0, name: 1, joiningDate: 1 })

    // db.employees.find({ joiningDate: { $gte: new Date("2024-01-01"), $lt: new Date("2025-01-01") } },  { projection: { _id: 0, name: 1, joiningDate: 1 } }).toArray();

    // Increase budget of CRM Portal by 10000 for John Doe
    // db.employees.updateOne(
    //     { name: "John Doe", "projects.name": "CRM Portal" },
    //     { $inc: { "projects.$.budget": 10000 } }
    // )

    // get the project and name of john doe
    // db.employees.findOne(
    //     { name: "John Doe", "projects.name": "CRM Portal" },
    //   { projection:  { _id: 0, name: 1, projects: { $elemMatch: { name: "CRM Portal" } } } }
    // )

    // Move all Bangalore employees to Mysore
    // db.employees.updateMany(
    //     { "address.city": "Bangalore" },
    //     { $set: { "address.city": "Mysore" } }
    // )

    // find mysore city
    // db.employees.find({ "address.city": "Mysore" }, { _id: 0, name: 1, "address.city": 1 })  // shell

    // Add a second address field for temporary location only for Active IT employees
    // db.employees.updateMany(
    // { department: "IT", status: "Active" },
    // { $set: { tempAddress: { city: "Pune", state: "Maharashtra", country: "India" } } }
    // )

    // see the result
    // db.employees.find(
    // { department: "IT", status: "Active" }).toArray();

    // list employee name + number of projects (aggregation)

    // db.employees.aggregate([
    // {
    //     $project: {
    //         _id: 0,
    //         name: 1,
    //         projectCount: { $size: "$projects" }
    //     }
    // },
    // { $sort: { projectCount: -1, name: 1 } }
    // ]).toArray();

    // people age greater than 25

    // db.employees.find({
    //     age: {
    //         $gte: 25
    //     }
    // }).toArray();

    // dept is IT and age greter than 20

    // db.employees.find({
    //     age: { $gt: 20 },
    //     department: "IT"
    // }).toArray();

    // eitther HR or IT
    // db.employees.find({
    //     $or: [
    //         { department: "IT" },
    //         { department: "HR" }
    //     ]
    // }).toArray()

    // only 5 documents are coming
    //  db.employees.find().limit(5).toArray();

    // next class

    // skipped the 1 document and give 2 documents
    // db.employees.find({}, { projection:{_id: 0, name: 1, projects: 1} }).skip(1).limit(2).toArray();

    // Find IT or HR employees:
    // db.employees.find({
    //     department: {
    //         $in: ["IT", "HR"]
    //     }
    // });

    // Find active employees:
    // db.employees.find({
    //     status: "Active"
    // }).toArray();

    // Only name and department:

    // db.employees.find(
    //     {},
    //     {
    //         name: 1,
    //         department: 1,
    //         _id: 0
    //     }
    // );

    // Sorting
    // Highest salary first:

    // db.employees.find()
    // .sort({
    //     salary: -1
    // }).toArray()

    // Newest joining first:

    // db.employees.find()
    // .sort({
    //     joiningDate: -1
    // });

    // Page 2 with 3 records per page:

    // db.employees.find().skip(3).limit(3);

    // Employees having MongoDB skill:

    // db.employees.find({
    //             skills: "MongoDB"
    //         }).toArray();

    //    Employees having both MongoDB and Docker:

    // db.employees.find({
    //     skills: {
    //         $all: ["MongoDB", "Docker"]
    //     }
    // });

    //    Employees having any one of  MongoDB and Docker:

    // db.employees.find({
    //     skills: {
    //         $in: ["MongoDB", "Docker"]
    //     }
    // });

    //     Aggregation Examples
    // Count Employees By Department

    // db.employees.aggregate([
    // {
    //     $group: {
    //         _id: "$department",
    //         totalEmployees: {
    //             $sum: 1
    //         }
    //     }
    // }
    // ]).toArray();

    // Average Salary Per Department

    // db.employees.aggregate([
    // {
    //     $group: {
    //         _id: "$department",
    //         averageSalary: {
    //             $avg: "$salary"
    //         }
    //     }
    // }
    // ]);

    // db.employees.aggregate([
    // {
    //     $group: {
    //         _id: "$department",
    //         averageSalary: {
    //             $avg: "$salary"
    //         },
    //         totalEmployees:{
    //             $sum: 1
    //         }
    //     }
    // }
    // ]).toArray();

    // Highest Salary Per Department

    // db.employees.aggregate([
    // {
    //     $group: {
    //         _id: "$department",
    //         highestSalary: {
    //             $max: "$salary"
    //         }
    //     }
    // }
    // ]);

    // Total Salary By Department

    // db.employees.aggregate([
    // {
    //     $group: {
    //         _id: "$department",
    //         totalSalary: {
    //             $sum: "$salary"
    //         }
    //     }
    // }
    // ])

    // Top 3 Highest Paid Employees

    // db.employees.aggregate([
    // {
    //     $sort: {
    //         salary: -1
    //     }
    // },
    // {
    //     $limit: 3
    // },
    // {
    //     $project: {
    //         name: 1,
    //         _id: 0,
    //         salary: 1
    //     }
    // }
    // ]).toArray();

    // joins
    // 1. All employees with their review (LEFT JOIN)

    // db.employees.aggregate([
    //   {
    //     $lookup: {
    //       from: "performance_reviews",
    //       localField: "_id",
    //       foreignField: "employee_id",
    //       as: "review"
    //     }
    //   },
    //   {
    //     $unwind: {
    //       path: "$review",
    //       preserveNullAndEmptyArrays: true
    //     }
    //   }
    // ])

    // 2. Single employee with their review

    // db.employees.aggregate([
    //   { $match: { _id: ObjectId("6a37b8dc74c5f211f19df8a3") } },
    //   {
    //     $lookup: {
    //       from: "performance_reviews",
    //       localField: "_id",
    //       foreignField: "employee_id",
    //       as: "review"
    //     }
    //   },
    //   { $unwind: { path: "$review", preserveNullAndEmptyArrays: true } }
    // ])

    // 3. Reviews with full employee details (reverse join)

    // db.performance_reviews.aggregate([
    //   {
    //     $lookup: {
    //       from: "employees",
    //       localField: "employee_id",
    //       foreignField: "_id",
    //       as: "employee"
    //     }
    //   },
    //   { $unwind: "$employee" }
    // ])

    // 4. Join + filter (e.g. only rating >= 4)
    // db.employees.aggregate([
    //   {
    //     $lookup: {
    //       from: "performance_reviews",
    //       localField: "_id",
    //       foreignField: "employee_id",
    //       as: "review"
    //     }
    //   },
    //   { $unwind: "$review" },
    //   { $match: { "review.rating": { $gte: 4 } } }
    // ])

    // db.employees
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "performance_reviews",
    //         localField: "_id",
    //         foreignField: "employee_id",
    //         as: "review",
    //       },
    //     },
    //     { $unwind: "$review" },
    //     { $match: { "review.rating": { $lte: 3 } } },
    //   ])


    // 5. Join + project specific fields only

//     db.employees.aggregate([
//   {
//     $lookup: {
//       from: "performance_reviews",
//       localField: "_id",
//       foreignField: "employee_id",
//       as: "review"
//     }
//   },
//   { $unwind: "$review" },
//   {
//     $project: {
//     _id: 0,
//       name: 1,
//       department: 1,
//       salary: 1,
//       "review.rating": 1,
//       "review.bonus": 1,
//       "review.reviewedBy": 1
//     }
//   }
// ])



    // const result = await 
    //   .toArray();

    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: false,
    message: err.message || "internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
