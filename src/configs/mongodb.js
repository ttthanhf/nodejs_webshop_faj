require('dotenv').config();

const mongodbClient = require('mongodb').MongoClient;
const url = process.env.DB_MONGODB_SERVER;

mongodbClient.connect(url, function(err) {
    if (err) throw err;
    console.log("Connected to the MongoDB server !");
    db.close();
});
