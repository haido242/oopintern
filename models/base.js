const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;


class base {
    constructor(collectionName) {
        this.collectionName
    }
    get() {
        return database.getDb().collection(this.collectionName).find()
    };
    getById(id) {
        return database.getDb().collection(this.collectionName).find({ "_id": ObjectId(id) })
    }
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