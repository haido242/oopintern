const Group = require('../models/Group')

const mongodb = require('mongodb')

const {create, get, update, deleteData } = require('./BaseController')
const collection = "group"

const GroupController = {
    createGroup: async(req, res) => {
        try{
            const newGroup = new Group(req.body.GroupName)
            create(newGroup, collection)
            res.json("add group success")

        }
        catch(err){
            console.log(err)
            res.json("add group fail")
        }
    },
    getGoupList: async(req, res) =>{
        try{

            get(collection).then((data) =>{
                res.json(data)
            })
        }catch(err){
            console.log(err)
            res.json("get fail")
        }
    },
    deleteGroup: async(req, res) =>{
        try{
            const id = req.params['id']
            deleteData(id, collection)
            res.status(200).json("delete success")
        }catch (err){
            console.log(err)
            res.status(500).json("delete fail!")
        }
    },
    
    updateGroup: async (req, res)=>{
        try{
            const id = req.params['id'];
            const data = req.body
            update(id, data, collection)
            res.status(200).json("updated")
        }catch(err){
            console.log(err)
            res.json("update fail!")
        }
    }
}

module.exports = GroupController