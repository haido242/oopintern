const database = require('../mongo')
const ObjectId = require('mongodb').ObjectId

class baseController {
    static get (collection){
        const items = database.getDb().collection(collection).find()
        return items.toArray()
    }
    static deleteData (id, collection){
        return database.getDb().collection(collection).findOneAndDelete( { "_id" : ObjectId(id) } )
    }
    static update(id, data, collection)  {
        return database.getDb().collection(collection).updateOne({ "_id" : ObjectId(id) }, {$set : data})
    }
    static create (data, collection){
        return database.getDb().collection(collection).insertOne(data)
    }
    
}
module.exports = baseController