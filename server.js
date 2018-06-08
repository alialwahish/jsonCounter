var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require("body-parser");

var session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,"/static")));

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    times:0
  }))

app.get('/',function(request,response){
    
    request.session.times+=1
    response.render("index",{times:request.session.times});
})

app.get('/add2',function(request,response){
    request.session.times+=2;

    response.render("index",{times:request.session.times})
})

app.get('/rest',function(request,response){
    request.session.times=0;
    response.render("index",{times:request.session.times});
})

app.listen(5000,function(){
    console.log("Listening to port 5000")

});