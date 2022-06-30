const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysqlpassword',
    port: 3306,
    database: 'gimnasio_4'
});

connection.connect((err) => {
    console.log(err);
    // connection.query('select * from clientes', (err, result) => {
    //     console.log(err);
    //     console.log(result);
    // });

    connection.query('update clientes set edad = 43 where id = 99', (err, result) => {
        console.log(err);
        console.log(result);
    })
});