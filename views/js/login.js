/* 
* This example uses the node MongoDB module to connect to the local
* mongodb database on this virtual machine
*
*/

//require node modules (see package.json)
var port = process.env.PORT || 1337;
var mongo = require('mongodb').MongoClient;


//Persist in DB
        var data ="hope it works";
        mongo.connect(process.env.PROJECT_MONGOLAB_URI, function (err, db) {
            var collection = db.collection('chat messages');
            collection.insert({ content: data }, function (err, o) {
                if (err) { console.warn(err.message); }
                else { console.log("chat message inserted into db: " + data); }
            });
        });
