const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const getConnect = async () =>{
    
    const conn = await client.connect();
    const db = conn.db("mydatabase");
    collection =  db.collection("Emp");
    return collection;
}

module.exports = getConnect;