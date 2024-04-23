
const { fork } = require('child_process');
// const mongoInsert = require("../mongoInsert.js");
// const sqlInsert = require("../sqlInsert.js");


const saveStudentDetails = (req, res) => {
    const mongoChild = fork('./mongoInsert.js');
    const sqlChild = fork('./sqlInsert.js');

    const data = req.body;

    mongoChild.send(data);
    sqlChild.send(data);

    // Listening for message from child processes
    mongoChild.on('message', (msg) => {
        console.log('Message from MongoDB child:', msg);
    });

    sqlChild.on('message', (msg) => {
        console.log('Message from SQL child:', msg);
    });

    res.json({})
    // console.log(req.body)
    // res.send("API's is Working fine:")
}

module.exports = {
    saveStudentDetails
}