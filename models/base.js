const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;


class base {
    constructor(collectionName) {
        this.collectionName
    }
    get() {
        return this.query().find()
    };
    getById(id) {
        return this.query().find({ "_id": ObjectId(id) })
    }
    add(data) {
        return this.query().insertOne(data)
    }
    del(id) {
        return this.query().deleteOne({ "_id": ObjectId(id) })
    }
    update(id, data) {
        return this.query().updateOne({ "_id": ObjectId(id) },
            { $set: data })
    }
    query(){
        return database.getDb().collection(this.collectionName)
    }
    count(){
        return this.get().count()
    }
}

module.exports = base