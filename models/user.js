var mongoose    =   require("mongoose");
//mongoose.connect('mongodb://localhost:27017/demoDb');
var dbUrl= 'mongodb://moumie23:moumie23@ds011442.mlab.com:11442/moumiemongodb';
mongoose.createConnection(dbUrl);
// create instance of Schema
var mongoSchema =   mongoose.Schema;

// create User schema
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
// create model if not exists.
module.exports = mongoose.model('users',userSchema);