const User = require('../models/User')
const Group = require('../models/Group')

const mongodb = require('mongodb')
const baseController = require('./BaseController')
const { create, update, get, deleteData } = require('./BaseController')
const collection = "user"
const userController = {
    createUser: async(req, res) =>{
        try{
            const newUser =new User(req.body)
            create(newUser, "user")
            res.json("add user success")
        }catch(err){
            console.log(err)
            res.json("add user fail")
        }S
    },
    getUserList: async(req, res) =>{
        get(collection).then((data) =>{
            res.json(data)
        })
        
    },
    deleteUser: async(req, res)=>{
        
        try{
            const id = req.params['id']
            deleteData(id, collection)
            res.status(200).json("delete success")
        }catch (err){
            console.log(err)
            res.status(500).json("delete fail!")
        }
    },
    updateUser: async (req, res)=>{
        try{
            const id = req.params['id'];
            const data = req.body
            update(id, data, collection)
            res.status(200).json("updated")
        }catch(err){
            console.log(err)
            res.json("update fail!")
        }
            
    },
    
}




module.exports = userController