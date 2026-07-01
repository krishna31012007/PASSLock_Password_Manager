const express = require('express'); 
const { MongoClient } = require('mongodb'); //import mongodb  to connect from database
const dotenv = require('dotenv'); // import dotenv from documentation to access environment variables from .env file 
const cors = require('cors'); // import cors middleware to allow frontend requests

dotenv.config(); 

const app = express(); 
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CLIENT_URL || "*" // set CLIENT_URL to your Vercel URL in Render's env vars
})); 
app.use(express.json()); // Parse incoming JSON request bodies automatically

// Create MongoDB client using connection string stored in .env
const client = new MongoClient(process.env.MONGO_URI);


const dbName = "PASSLock";


// ========================
// GET ALL PASSWORDS
// ========================

app.get('/', async (req, res) => {

    // Access PASSLock database
    const db = client.db(dbName);

    // Access passwords collection
    const collection = db.collection('passwords');

    // Fetch all documents from collection and convert cursor to array
    const passwords = await collection.find({}).toArray();

    // Send all passwords to frontend as JSON
    res.json(passwords);
});


// ========================
// SAVE A PASSWORD
// ========================

app.post('/', async (req, res) => {

    // Access database
    const db = client.db(dbName);

    // Access passwords collection
    const collection = db.collection('passwords');

    // Insert the password object received from frontend
    const result = await collection.insertOne(req.body);

    // Send success response back to frontend
    res.json({
        success: true,
        result
    });
});


// ========================
// DELETE ONE PASSWORD
// ========================

app.delete('/', async (req, res) => {

    // Access database
    const db = client.db(dbName);

    // Access passwords collection
    const collection = db.collection('passwords');

    // Delete document whose id matches the id sent from frontend
    const result = await collection.deleteOne({
        id: req.body.id
    });

    // Send success response
    res.json({
        success: true,
        result
    });
});


// ========================
// DELETE ALL PASSWORDS
// ========================

app.delete('/all', async (req, res) => {

    // Access database
    const db = client.db(dbName);

    // Access passwords collection
    const collection = db.collection('passwords');

    // Delete every document inside passwords collection
    const result = await collection.deleteMany({});

    // Send number of deleted documents
    res.json({
        success: true,
        deletedCount: result.deletedCount
    });
});


// ========================
// CONNECT DATABASE & START SERVER
// ========================

async function main() {

    // Establish connection with MongoDB
    await client.connect();

    console.log("MongoDB Connected");

    // Start Express server after DB connection is successful
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

// Execute main function
main().catch(console.error);