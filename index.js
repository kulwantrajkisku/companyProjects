// const {fork} = require('child_process');

// function insertMongoDB(data) {
//     const childProcess = fork('mongoInsert.js');
//     childProcess.send(data);
// }


require('dotenv').config();

const mongoose = require('mongoose')
const express = require('express');
const app = express();

//const connectionString = 'mongodb+srv://kulwantraj1997:root@blogcluster1.8pfokur.mongodb.net/insertData?retryWrites=true&w=majority';

const connectToDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Connected to db");
    } catch (error) {
        console.log(error)
    }
}


const router = require("./router/studentRouter")

app.use(express.json());
app.use("/details", router)

app.get("/", (req, res) => {
    res.send("Hello there you have been pulling me closer")
})

const PORT = 8080;

app.listen(PORT, () => {
    //connectToDB();
    console.log(`It is listening on port: ${PORT}`);
})