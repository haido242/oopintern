const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;
const base = require('./base')
class User  extends base{
    constructor() {
        super(base)
        this.collectionName = "user";
    }

    // get() {
    //     return database.getDb().collection("user").find()
    // };
    add(data) {
        return database.getDb().collection('user').insertOne(data)
    }
    del(id) {
        return database.getDb().collection('user').deleteOne({ "_id": ObjectId(id) })
    }
    update(id, data) {
        return database.getDb().collection('user').updateOne({ "_id": ObjectId(id) },
            { $set: data })
    }
}

module.exports = User;


// MVC , 3 lop 

// user controller - group controller

// service 

// model 