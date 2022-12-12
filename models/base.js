const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;


class base {
    constructor(collectionName){
        this.collectionName
    }
    get() {
        return database.getDb().collection(this.collectionName).find()
    };
    add(data) {
        return database.getDb().collection(this.collectionName).insertOne(data)
    }
    del(id) {
        return database.getDb().collection(this.collectionName).deleteOne({ "_id": ObjectId(id) })
    }
    update(id, data) {
        return database.getDb().collection(this.collectionName).updateOne({ "_id": ObjectId(id) },
            { $set: data })
    }
}

module.exports = base