const User = require('../models/User')
const Group = require('../models/Group')

// const Mongo = require('../mongo')
// // mongoDb= require('../mongodb')
// connectToServer((err)=>{
//     if(err) console.log(err)
// })
// var db = Mongo.getDb()

const mongoClient = require('mongodb').MongoClient
const dbURL = "mongodb://0.0.0.0:27017/user"
mongoClient.connect(dbURL, (err, database) => {
        if(err) {return console.log(err)}
        else console.log("connected to mongoBD")
    
    db = database.db()
})
const userController = {
    createUser: async(req, res) =>{
        try{

            const newUser = new User(req.body.UserName,
                req.body.Password,
                req.body.Email,
                req.body.Gender,
                req.body.GroupName)
                newUser.addUser()
                await db.collection("group").updateOne(
                    {groupName : req.body.GroupName},
                    {
                        $push: {memberGroup : newUser}
                    }
                    )
                    res.json(newUser)
        }catch(err){
            console.log(err)
        }
    },
    getUserList: async(req, res) =>{
        const newUser = new User
        const items = newUser.getData()
        res.json(items)
        
    },
    deleteUser: async(req, res)=>{
        try{
            const userId = req.params['id'];
            db.collection('user').deleteOne( { "_id" : mongodb.ObjectId(userId) } );
            db.collection('group').updateOne(
                {memberGroup: {
                    _id : mongodb.ObjectId(userId)
                }},
                {
                    $pull: {memberGroup : {_id: mongodb.ObjectId(userId)}}
                }
            )
            res.status(200).json("delete success")
    
        }catch (err){
            console.log(err)
            res.status(500).json("delete fail!")
        }
    },
    updateUser: async (req, res)=>{
        try{
            const userId = req.params['id'];
            db.collection('user').updateOne(
                { _id : mongodb.ObjectId(userId) },
                {
                    $set : {"UserName": req.body.UserName,
                    "Password" : req.body.Password,
                    "Email" : req.body.Email,
                    "Gender" : req.body.Gender,
                    "GroupName" : req.body.GroupName}
                }
            )
            res.status(200).json("updated")
        }catch(err){
            console.log(err)
            res.json("update fail!")
        }
    },
    test: (req, res) => {
        db.collection('user').insertOne(req.body.test)
        res.status(200)
        // res.send('test')
    }
}


module.exports = userController