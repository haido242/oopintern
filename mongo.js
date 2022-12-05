
const dbURL = "mongodb://0.0.0.0:27017/user"

const MongoClient = require( 'mongodb' ).MongoClient;


var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( dbURL,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('test_db');
      return callback( err );
    } );
  },
  getDb: function() {
    return _db;
  },
// note: không xử lý được nhiều req cùng lúc do có 1 biến _db
};
