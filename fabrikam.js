var express = require('express');
var app = express();


var Fabrikam=function(req, res){
  console.log("Invoking  rest api for product list");
  var product = [
    {id:1, Product:"maggie",amount:50},
    {id:2, Product:"rice",amount:150},
    {id:3, Product:"wheat",amount:120}
  ];
  res.send(product);
};
 


app.get('/product',Fabrikam);

var server = app.listen(8089, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("fabrikam app listening at http://localhost:8089", host, port)
})