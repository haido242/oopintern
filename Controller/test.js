const User = require("../models/User");
class test extends User {
    constructor() {
        super(User);
    }
    
     async get (req, res) {
        console.log(super.getUser)
        const user = await super.getUser()
        user.toArray().then((data)=>res.json(data))
    }
}

module.exports = test;
