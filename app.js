const express = require('express')
const app = express();


app.use(express.json());

// Database connection
const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'task1';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to the database task');
    const db = client.db(dbName);
    const collection = db.collection('documents');
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


//importing route
// const eventRoute = require('./routes/event');

// // route middleware
// app.use('/api/v3/app', eventRoute);

app.post('/events', async (req, res) => {

    const data = req.body;
    try {
        const createUser = await collection.insertOne({ name: "Mukesh" });
        console.log(createUser);
        res.status(200).json({
            data: createUser
        })
    }
    catch (error) {
        console.log(error);
    }

})



// const data = async () => {
//     const info = await collection.insertOne({ name: "Mukesh" });
//     console.log(info);
// }

// const data = collection.find({});
// console.log(data);

app.listen(3000, () => {
    console.log("Listening on port 3000!!");
})