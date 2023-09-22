const mysql = require('mysql2');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'project'
});

con.connect((err)=>{
    if(err){
        console.warn('error');
    }
    else{
        console.warn('connected');
    }
})

module.exports = con;