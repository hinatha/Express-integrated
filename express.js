const port = 3000

const mysql = require('mysql');

const con = mysql.createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: '',
    database: 'express_db'
  });
  
  con.connect(function(err) {
      if (err) throw err;
      console.log('Connected');
  });
  
  app.get('/', (request, response) => {
      const sql = "select * from users"
      con.query(sql, function (err, result, fields) {  
      if (err) throw err;
      response.send(result)
      });
  });

  

