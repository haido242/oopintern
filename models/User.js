const database = require("../mongo");
const ObjectId = require("mongodb").ObjectId;
const base = require('./base')
class User  extends base{
    constructor() {
        super(base)
        this.collectionName = "user";
    }
    
}

module.exports = User;


// MVC , 3 lop 

// user controller - group controller

// service 

// model 