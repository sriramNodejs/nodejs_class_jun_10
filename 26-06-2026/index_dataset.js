const express = require('express');
const { MongoClient, ObjectId, ISODate } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;


const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = 'test_db';


const Users_collection = 'users'
const Emp_Collection = 'employees';
const Review_Collection = 'performance_reviews';


let db;

MongoClient.connect(MONGO_URI).then((client) => {
    db = client.db(DB_NAME);
    console.log('connected to database')
}).catch((err) => {
    console.log('err in db connection', err)
})

// 
// C -> Create
// R -> Read
// U -> Update
// D -> Delete



app.get('/users', async (req, res, next) => {
    try {
        const employees = db.collection(Emp_Collection);
        db.employees = employees;  // patching

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
        // db.employees.find({ joiningDate: { $gte: new Date("2023-01-01") } })

        // Employees who worked on CRM Portal project
        // db.employees.find({ "projects.name": "CRM Portal" })


        const result = await db.employees.find({ "projects.name": "HR Portal" }).toArray();

        res.json({
            result
        })
    } catch (error) {
        next(error)
    }

})


app.use((err, req, res, next) => {
    res.status(500).json({
        status: false,
        message: err.message || 'internal server error'
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})