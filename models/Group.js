const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;
const base = require('./base')
class Group extends base {
    constructor() {
        super(base)
        this.collectionName = "group";
        this.member = []
    }
    addMember(id, data) {
        return database.getDb().collection('group').updateOne({ "_id": ObjectId(id) },
            { $push: { member: data } }
        )
    }

}

module.exports = Group