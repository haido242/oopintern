const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;
const base = require('./base')
class User extends base {
    constructor() {
        super(base)
        this.collectionName = "user";
    }

    search(value){
        return database.getDb().collection('user').find({"UserName":{$text: {$search: value}}})
    }
}
module.exports = User;


// MVC , 3 lop

// user controller - group controller

// service

// model 