const User = require('../models/User')
const {addMemberGroup} = require('./GroupController')
const baseController = require('./BaseController')
const collection = "user"
class userController {
    static createUser (req, res) {
        try{
            const newUser = new User(req.body)
            baseController.create(newUser, "user")
            .then((data)=>{
                addMemberGroup(req.body.GroupId, data.insertedId)
            })
            res.json("add user success")
        }catch(err){
            console.log(err)
            res.json("add user fail")
        }
    }
    static getUserList (req, res) {
        try{
            
            baseController.get(collection).then((data) =>{
                res.json(data)
            })
        }catch(err){
            console.log(err)
            res.json('get list user is fail!')
        }  
    }
    static deleteUser(req, res){
        
        try{
            const id = req.params['id']
            baseController.deleteData(id, collection)
            res.status(200).json("delete success")
        }catch (err){
            console.log(err)
            res.status(500).json("delete fail!")
        }
    }
    static updateUser  (req, res){
        try{
            const id = req.params['id'];
            const data = req.body
            baseController.update(id, data, collection)
            res.status(200).json("updated")
        }catch(err){
            console.log(err)
            res.json("update fail!")
        }
    }
}


module.exports = userController