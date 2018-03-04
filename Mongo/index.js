var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost/sandbox";
var database;
var express = require("express");
var bodyParser = require("body-parser")
var app = express();
app.use(express.static("./client"));
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.post("/enroll", urlencodedParser, function(request, response){
    var depot = database.collection("depot");
    depot.insert({
        firstName:request.body.firstName,
        lastName:request.body.lastName
    }, function(err, result){});
    response.redirect("record.html");
;})

app.get("/", function(request, response){
    var depot = database.collection("depot");
    depot.find().toArray(function(err,documents){
        if(documents.length >0)
            console.log(documents[0]);
    });
});
mongoClient.connect(url, function(err, db){
    database =db;
    app.listen(591);
})