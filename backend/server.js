const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);

const dbName = "PASSLock";

// Get all passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');

    const passwords = await collection.find({}).toArray();

    res.json(passwords);
});

// Save password
app.post('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');

    const result = await collection.insertOne(req.body);

    res.json({
        success: true,
        result
    });
});

// Delete password
app.delete('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');

    const result = await collection.deleteOne({
        id: req.body.id
    });

    res.json({
        success: true,
        result
    });
});

// Delete all passwords
app.delete("/all", async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection("passwords");

    const result = await collection.deleteMany({});

    res.json({
        success: true,
        deletedCount: result.deletedCount
    });
});

async function main() {
    await client.connect();
    console.log("MongoDB Connected");

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

main().catch(console.error);