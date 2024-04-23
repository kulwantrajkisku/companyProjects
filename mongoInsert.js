console.log("CHILD mongo CREATED", process.pid);

const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://kulwantraj1997:root@blogcluster1.8pfokur.mongodb.net/insertData?retryWrites=true&w=majority';


const studentSchema = new mongoose.Schema({
    name: String,
    subject: String,
    marks: Number
});

const studentModel = mongoose.model('Data', studentSchema);

process.on('message', async (data) => {
    try {
        await mongoose.connect(connectionString);

        await studentModel.insertMany(data)

        process.send("Data Inserted")
    } catch (error) {
        process.send("Student details not saved.");
    }
})