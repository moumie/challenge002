var mongoose = require("mongoose");
var dbUrl= 'mongodb://moumie23:moumie23@ds011442.mlab.com:11442/moumiemongodb';
mongoose.connect(dbUrl);
// create instance of Schema
var mongoSchema =   mongoose.Schema;

// create Document schema
var docSchema  = {
    "name" : String,
    "creator" : String
};
// create model if not exists.
module.exports = mongoose.model('docs',docSchema);