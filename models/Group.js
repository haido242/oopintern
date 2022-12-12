const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;
class Group {
    constructor(GroupName) {
        this.collectionName = "group";
        this.GroupName = GroupName;
        this.member = []
    }
    get() {
        return database.getDb().collection("group").find()
    }
    add(data) {
        return database.getDb().collection('group').insertOne(data)
    }
    del(id) {
        return database.getDb().collection('group').deleteOne({ "_id": ObjectId(id) })
    }
    update(id, data) {
        return database.getDb().collection('group').updateOne({ "_id": ObjectId(id) },
            { $set: data })
    }
}

module.exports = Group