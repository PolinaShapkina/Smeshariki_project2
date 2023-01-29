var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("heroes");
database.dropDatabase()
database = client.db("heroes");
const hunter = database.collection("hero");
const result = await hunter.insertMany(data);
console.log(`${result.insertedCount} documents were inserted`);
for (const key in result) {
            console.log(`${key}: ${result[key]}`);
            }
} finally {
await client.close();
}
}
run()