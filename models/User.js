const Group = require('./Group')
class User extends  Group{
        constructor(data){
        super(Group.GroupName = data.GroupName)
        this.UserName = data.UserName;
        this.collectionName = "user"
        this.Password = data.Password;
        this.Email = data.Email;
        this.Gender =data.Gender;
    };
    

}

module.exports = User