const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;


const MONGO_URI = process.env.MONGO_URI;
const DB_NAME='test_db';


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



app.get('/users', async(req, res, next) => {
    try {
        const users = await db.collection(Users_collection).find().toArray();
        res.json({
            users
        })
    } catch (error) {
        next(error)
    }

})

app.get('/users/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const user = await db.collection(Users_collection).findOne({_id: new ObjectId(id) });
        if(!user){
            return res.status(404).json({
                message: 'User not found'
            })
        }
        res.json({
            user
        })
    } catch (error) {
        next(error)
    }
})

app.post('/users', async(req, res, next) => {
    try {
        const body = req.body
        const user = await db.collection(Users_collection).insertOne(body)
        res.json({
            user
        })
    } catch (error) {
        next(error)
    }

})

app.put('/users/:id', async(req, res, next) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const user = await db.collection(Users_collection).updateOne({_id: new ObjectId(id)}, {$set: body});
        if(user.matchedCount === 0){
            return res.status(404).json({
                message: 'User not found'
            })
        }
        res.json({
            user
        })
    } catch (error) {
        next(error)
    }
})


app.delete('/users/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const user = await db.collection(Users_collection).deleteOne({_id: new ObjectId(id)});
        if(user.deletedCount === 0){
            return res.status(404).json({
                message: 'User not found'
            })
        }
        res.json({
            user,
            message: 'user deleted successfully'
        })
    } catch (error) {
        next(error)
    }
})

app.use((err, req, res, next) => {
    res.status(500).json({
        status:false,
        message: err.message || 'internal server error'
    })
})



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})