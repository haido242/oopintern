const ObjectId = require("mongodb").ObjectId
const model = require('./model');
class Group extends model{
    constructor(GroupName){
        super(model)
        this.collectionName = "group";
        this.GroupName = GroupName;
    }
    getData(){
        return this.query().find()
    }
    addGroup(){
        return this.query().insertOne({GroupName: this.GroupName, member: []})
    }
    deleteUser(GroupId){
        return this.query().deleteOne( { "_id" : ObjectId(GroupId) } )
    }


}

module.exports = Group