
class model{
    constructor(collectionName){
        this.database = require("../mongo")
        this.collectionName = collectionName

    };
}

module.exports = model