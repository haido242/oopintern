const Group = require('../models/Group')
const ObjectId = require('mongodb').ObjectId
const mongodb = require('../mongo')
const baseController = require('./BaseController')
const collection = "group"
class GroupController  {
     static createGroup (req, res)  {
        try{
            const newGroup = new Group(req.body.GroupName)
            baseController.create(newGroup, collection)
            res.json("add group success")

        }
        catch(err){
            console.log(err)
            res.json("add group fail")
        }
    }
     static getGoupList (req, res) {
        try{

            baseController.get(collection).then((data) =>{
                res.json(data)
            })
        }catch(err){
            console.log(err)
            res.json("get fail")
        }
    }
     static deleteGroup(req, res) {
        try{
            const id = req.params['id']
            baseController.deleteData(id, collection)
            res.status(200).json("delete success")
        }catch (err){
            console.log(err)
            res.status(500).json("delete fail!")
        }
    }
    
     static updateGroup(req, res){
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
     static addMemberGroup(id, idUser){
        try{
            return mongodb.getDb().collection('group').updateOne({ "_id" : ObjectId(id) }, {$push: {member: {'id':idUser}}})
        }catch(err){
            return err
        }
    }
}

module.exports = GroupController