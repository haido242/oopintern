const User = require('../models/User')
const Group = require('../models/Group')

// const Mongo = require('../mongo')
// // mongoDb= require('../mongodb')
// connectToServer((err)=>{
//     if(err) console.log(err)
// })
// var db = Mongo.getDb()

const mongodb = require('mongodb')
// const dbURL = "mongodb://0.0.0.0:27017/user"
// mongoClient.connect(dbURL, (err, database) => {
//         if(err) {return console.log(err)}
//         else console.log("connected to mongoBD")
    
//     db = database.db()
// })
const userController = {
    createUser: async(req, res) =>{
        try{

            const newUser =new User(req.body.UserName,
                req.body.Password,
                req.body.Email,
                req.body.Gender,
                req.body.GroupName)
            const group = new Group
            const user = await newUser.addUser()
            group.query().updateOne(
                {"GroupName" : req.GroupName},{
                    
                    $push: {
                        member: newUser
                    }
                }
            )
            res.json(user)
        }catch(err){
            console.log(err)
            res.json("add user fail")
        }
    },
    getUserList: async(req, res) =>{
        const newUser =await new User
        const items =await newUser.getData()
        // console.log(items)
        items.toArray((err, item)=> {
            
            res.json(item)
        })
    },
    deleteUser: async(req, res)=>{
        try{
            const userId = req.params['id'];
            const user = new User

            await user.deleteUser( userId );
            res.status(200).json("delete success")
    
        }catch (err){
            console.log(err)
            res.status(500).json("delete fail!")
        }
    },
    updateUser: async (req, res)=>{
        try{
            const userId = req.params['id'];
            const newUser = new User(req.body.UserName, req.body.Password, req.body.Email, req.body.Gender, req.body.GroupName)
            await newUser.query().updateOne(
                { _id : mongodb.ObjectId(userId) },
                {
                    $mul : newUser
                }
            )
            res.status(200).json("updated")
        }catch(err){
            console.log(err)
            res.json("update fail!")
        }
    },
    
}


module.exports = userController