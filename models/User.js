const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;

class User  {
    constructor(data) {
        this.UserName = data.UserName;
        this.collectionName = "user";
        this.Password = data.Password;
        this.Email = data.Email;
        this.Gender = data.Gender;
        this.GroupId = data.GroupId
    }
    // query = database.getDb().collection("user");

    getUser() {
        return database.getDb().collection("user").find()
        // return 1
    };
}

module.exports = User;
