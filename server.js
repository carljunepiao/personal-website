var express = require('express');
var consolidate = require('consolidate');
const cookieparser = require('cookie-parser');
const flash = require('express-flash');
var bodyparser = require('body-parser');
var Visitor = require('./database').Visitor;
const session = require('express-session');


var app = express();

app.set('views','./templates');
app.engine('html', consolidate.nunjucks);

app.use(express.static('./css'));
app.use(express.static('./Profile'));
app.use(express.static('./Logos'));
app.use(express.static('./resources'));
app.use(express.static('./BackgroundPicture'));

app.use(bodyparser.urlencoded());

app.use(session({ resave: false, saveUninitialized: false, secret: 'secret-cookie' }));
app.use(flash());

app.get('/',function(req,res){
	res.render('index.html');
});

app.get('/home',function(req,res){
	res.render('home.html');
});

app.get('/about',function(req,res){
	res.render('about.html');
});

app.get('/contact',function(req,res){
	res.render('contact.html');
});

app.post('/contacts', function(req,res){
	console.log(req.body);

	var fname = req.body.firstname;
	var lname = req.body.lastname;
	var country = req.body.country;
	var message = req.body.message;

	Visitor.create({
            fname: fname,
            lname: lname,
            country: country,
            message: message
    }).then(function(){
        req.flash('statusMsg', 'Successfully sent message!');
    	res.redirect('/contact');
    });
});

app.get('/resume',function(req,res){
	res.render('resume.html');
});

app.listen(53217,function(){
	console.log('Server up and running at port 53217');
});
