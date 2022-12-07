
const ObjectId = require("mongodb").ObjectId
const model = require('./model');

class User extends model {
    // constructor(UserName, Password, Email, Gender, GroupName){
        constructor(data){
        super(model)
        this.GroupName = data.GroupName
        this.UserName = data.UserName;
        this.collectionName = "user"
        this.Password = data.Password;
        this.Email = data.Email;
        this.Gender =data.Gender;
    };
    

}

module.exports = User