const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;
const base = require('./base')
class User extends base {
    constructor() {
        super(base)
        this.collectionName = "user";
    }

    search(field,value) {
        return database.getDb().collection('user').find({ [field]: { $regex: value } }).sort({UserName:1})
    }
}
module.exports = User;
