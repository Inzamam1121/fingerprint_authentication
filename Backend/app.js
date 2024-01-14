const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// Define the MongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/fingerprint';

// Connect to the MongoDB database when the server starts
const startServer = async () => {
  try {
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db();

    console.log('Connected to the database');

    // Close the database connection when the server shuts down
    process.on('SIGINT', () => {
      client.close();
      console.log('Database connection closed');
      process.exit(0);
    });

    const port = 3011;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

// Start the server and connect to the database
startServer();

app.get('/hello', (req, res) => {
  res.send('Hello Inzamam');
});
