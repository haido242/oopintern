const database = require('../mongo')
const ObjectId = require('mongodb').ObjectId

const baseController = {
    get:async (collection) =>{
        const items = await database.getDb().collection(collection).find()
        return items.toArray()
    },
    deleteData: async(id, collection) =>{
        
        return database.getDb().collection(collection).findOneAndDelete( { "_id" : ObjectId(id) } )
                
        
    },
    update: async(id, data, collection) => {
        return database.getDb().collection(collection).updateOne({ "_id" : ObjectId(id) }, {$set : data})
    },
    create: async(data, collection) =>{
        return database.getDb().collection(collection).insertOne(data)
    }
    
}
module.exports = baseController