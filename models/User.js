const Group = require('./Group');
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
        this.get().collection("user").find().toArray((err, items)=>{
            if(err) return err
            return items
        })

    }
    addUser(){
        this.get().collection("user").insertOne({UserName: this.Name, Password: this.Password, Email: this.Email,
        Gender: this.Gender, GroupName: this.GroupName})
    }
}

module.exports = User