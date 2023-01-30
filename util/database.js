const mysql = require('mysql2');    

// 2 ways to connect with a sql database....

// 1st way--> we step up one connection which can then use to run queries and we should always close the connection once we done with queries..
// in downside is that we need to re-execute the code to create the connection for every new query...lot of quiers like write data, delete data...
// creating new connections all the time becomes very inefficient both in code and connection the database...performance become cost...

// better way--> "connection pool"---package

//".createPool"--> becausewe had queries to run and then get new connection from that pool which manages multiple connections...so can run multiple queries simultanesously...because each query needs its own connection..once query done... the connection handed back into pool...and available for new query...
/// and pool can be finished when our application shuts down...

// "username and host"--> gives acess to the database server but that server typically has multiple databases and
// "databases" are our "schemas"
//here we take "node-complete" database..
// to create pool -- we give javascipt object which we give some information---> "host", "user", "database", "password"...

 const pool= mysql.createPool({
 host:'localhost',
 user:'root',
 database: 'node-complete',
 password: 'Mysql0602@'
 });
 
 module.exports =pool.promise();      // we use promise because more structurere way instead of callbacks...callbacks had nested callbacks...

 // import this in "app.js"