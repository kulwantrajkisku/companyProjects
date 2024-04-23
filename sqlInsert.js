console.log("CHILD sql CREATED", process.pid);

const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "demo",
    connectionLimit: 10
});


process.on('message', async (data) => {
    //console.log(data);
    const { name, subject, marks } = data;
    try {
        await mysqlPool.query('insert into studentdetails (name, subject, marks) values (?, ?, ?)', [name, subject, marks])
        process.send("Inserted data");
    } catch (error) {
        process.send(error)
    }
})