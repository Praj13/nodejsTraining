var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"training"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql="Insert into User (name,email) values ('Prajwol','rajbansiprajwol@gmail.com')";
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log("data inserted");
  })
});