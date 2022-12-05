const Group = require('../models/Group')

const mongodb = require('mongodb')



const GroupController = {
    createGroup: async(req, res) => {
        try{
            const newGroup = new Group(req.body.GroupName)
            const group = await newGroup.addGroup(newGroup)

            res.json("add group success")

        }
        catch(err){
            console.log(err)
            res.json("add group fail")
        }
    },
    getGoupList: async(req, res) =>{
        try{

            const newGroup =new Group()
            const items =await newGroup.getData()
            items.toArray((err, item)=> {
                
                res.json(item)
            })
        }catch(err){
            console.log(err)
            res.json("get fail")
        }
    },
    deleteGroup: async(req, res) =>{
        try{
            const GroupId = req.params['id']
            const group = new Group()
            await group.deleteGroup(GroupId)
            res.status(200).json("delete success")
        }catch (err){
            console.log(err)
            res.status(500).json("delete fail!")
        }
    },
    updateGroup: async (req, res)=>{
        try{
            const GoupId = req.params['id'];
            const newGroup = new Group(req.body.GroupName)
            await newGroup.query().updateOne(
                { _id : mongodb.ObjectId(GoupId) },
                {
                    $mul : newGroup
                }
            )
            res.status(200).json("updated")
        }catch(err){
            console.log(err)
            res.json("update fail!")
        }
    }
}

module.exports = GroupController