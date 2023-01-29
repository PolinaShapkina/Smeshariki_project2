var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("heroes");
database.dropDatabase()
database = client.db("heroes");
const hunter = database.collection("hero");
const result = await hunter.insertOne({name:"Крош"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()