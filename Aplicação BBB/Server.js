// Get the packages we need
var express = require('express');
var bodyParser = require('body-parser');


// Create our Express application
var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 3050;

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())



app.get('/message', function(req, res) {
  res.send("get rafa");
 // res.json({ message: 'You are running dangerously low on beer!' });
});


app.post('/message', function(req, res) {
  res.send("post  rafa");
  //res.json({ message: 'You are running dangerously low on beer!' +  res.message});
  
  console.log("testando ");
  if(req.body.message != undefined){
      console.log(req.body.message);
  }else{
       console.log("Mensagem desconhecida");
       console.log(req.body);
  }	
   // console.log(req.on("data",function(data){
   // 	console.log("data" + data);

   // }) );

//  console.log(req.port);
  //console.log(res.message);
 // console.log(req);
  //console.log(res.message);
  //console.log("testando ");

});


// Register all our routes with /api
//app.use('/api', router);


app.put('/user', function(req, res) {
  res.send("user rafa");
  res.json({ message: '2!' });
});


app.delete('/user', function(req, res) {
  res.send("delete rafa");
  res.json({ message: '3!' });
});


// Start the server
app.listen(port);
console.log('Insert beer on port ' + port)