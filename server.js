var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require("body-parser");

var times =0;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,"/static")));

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.get('/',function(request,response){
    times+=1;
    response.render("index",{times:times})
})

app.get('/add2',function(request,response){
    times+=2;
    response.render("index",{times:times})
})

app.get('/rest',function(request,response){
    times=0;
    response.render("index",{times:times});
})

app.listen(5000,function(){
    console.log("Listening to port 5000")

});