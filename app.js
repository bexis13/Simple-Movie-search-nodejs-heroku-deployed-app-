var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

/***request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})**/

app.get("/", function(req, res){
    res.render("search");
    
})

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query;
  request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
    res.render("results", {data: data}); // Show the HTML for the Google homepage.
  }
})
})






app.listen(process.env.PORT, process.env.IP, function(){
    console.log("movie app has started started");
})