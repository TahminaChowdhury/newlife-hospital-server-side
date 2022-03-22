const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId =require("mongodb").ObjectId;
require('dotenv').config();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Newlife hospital server side!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})