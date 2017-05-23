var express = require('express');
var multer  =   require('multer');
var mime    =   require('mime');
var mysql = require('mysql');
    
var app = express();
var bodyParser =    require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cors());

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
app.get("/getFormAngular", function (req, res) {

var sql = "Select * from rooms";
    connection.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);	
	console.log(result);
	
  });
});
/*app.get('/getFormAngular', function(req, res) {
  res.render('solutionTwo', {
    title: 'Express and Angular marriage'
  })
});*/
app.listen(3000);