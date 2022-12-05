
class model{
    constructor(collectionName){
        this.database = require("../mongo")
        this.collectionName = collectionName

    };
    
    get(){
        return this.database.getDb()
    }
    query(){
        return this.get().collection(this.collectionName)
    }
   
}

module.exports = model