const ObjectId = require("mongodb").ObjectId
const model = require('./model');
class Group extends model{
    constructor(GroupName){
        super(model)
        this.collectionName = "group";
        this.GroupName = GroupName;
    }
}

module.exports = Group