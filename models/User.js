
const ObjectId = require("mongodb").ObjectId
const model = require('./model');

class User extends model {
    constructor(UserName, Password, Email, Gender, GroupName){
        super(model)
        this.GroupName = GroupName
        this.Name = UserName;
        this.collectionName = "user"
        this.Password = Password;
        this.Email = Email;
        this.Gender =Gender;
    };
    
    getData(){
        return this.query().find()
    }
    addUser(){
        return this.query().insertOne({UserName: this.Name, Password: this.Password, Email: this.Email,
        Gender: this.Gender, GroupName: this.GroupName})
    }
    deleteUser(userId){
        return this.query().deleteOne( { "_id" : ObjectId(userId) } )
    }

}

module.exports = User