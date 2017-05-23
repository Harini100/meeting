var express = require('express');
var multer  =   require('multer');
var mime    =   require('mime');
var mysql = require('mysql');
var app = express();
var bodyParser =    require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mroom'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get('/angular_html.html', function(req, res){
    res.sendFile(__dirname + '/' + 'angular_html.html');
    console.log("----------------");
});
app.post("/postFormAngular", function (req, res) {
        console.log("FIRST NAME IS  "+req.body.fName);
		console.log("LAST NAME IS  "+req.body.lName);
		var value1=req.body.fName;
		var value2=req.body.lName;

		 response = {
      name:req.body.fName,
      address:req.body.lName
   };
  // console.log(response);
   res.end(JSON.stringify(response));
	
var sql = "INSERT INTO rooms SET ?";
  connection.query(sql, response, function (err, result) {
    if (err) throw err;
    //console.log(result);
  });
});
app.listen(3000);