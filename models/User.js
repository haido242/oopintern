const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;
const base = require('./base')
class User extends base {
    constructor() {
        super(base)
        this.collectionName = "user";
    }

    search(value) {
        return database.getDb().collection('user').find({ UserName: { $regex: value } }).sort({UserName:1})
    }
}
module.exports = User;
