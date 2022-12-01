
class model{
    constructor(collectionName){
        this.database = require("../mongo")
        this.database.connectToServer((err)=>{
            this.database.getDb
            if(err) console.log(err)
            
        })
        this.collectionName = collectionName

    };
    
    // query(){
    //     return this.db.collection(this.collectionName)
    // }
    get(){
        return this.database.getDb()
    }
    close(){
        return this.database.close()
    }
}

module.exports = model