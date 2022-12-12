const { MaxKey } = require('mongodb')
const run = require('nodemon/lib/monitor/run')
const Group = require('../models/Group')


class GroupController extends Group {
    async createGroup(req, res) {
        try {
            const newGroup = new Group(req.body.GroupName)
            await super.add(newGroup) //1 s 
            res.json("add group success")

        }
        catch (err) {
            console.log(err)
            res.json("add group fail")
        }
    }
    async getGoupList(req, res) {
        try {

            const data = await super.get()
            data.toArray().then((data) => res.json(data))
        } catch (err) {
            console.log(err)
            res.json("get fail")
        }
    }
    async deleteGroup(req, res) {
        try {
            const id = req.params['id']
            const data = await super.del(id)
            console.log("data ", data)
            res.status(200).json("delete success")
        } catch (err) {
            console.log(err)
            res.status(500).json("delete fail!")
        }
    }

    async updateGroup(req, res) {
        try {
            const id = req.params['id'];
            const data = req.body
            super.update(id, data)
            res.status(200).json("updated")
        } catch (err) {
            console.log(err)
            res.json("update fail!")
        }
    }

    
}

module.exports = GroupController


// userIds = [1,2, 3, 4,5]

// let data = []

// for(let i = 0; i < userIds.length; i++){
//     let user = this.model.getById(userIds[i])
//     data.push(user)
// }

// mang userIds: [123]
// return 3 cách, 