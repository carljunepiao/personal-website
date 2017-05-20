var express = require('express');
var consolidate = require('consolidate');

var app = express();

app.set('views','./templates');
app.engine('html', consolidate.nunjucks);

app.use(express.static('./css'));
app.use(express.static('./Profile'));
app.use(express.static('./Logos'));
app.use(express.static('./resources'));
app.use(express.static('./BackgroundPicture'));


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

app.get('/resume',function(req,res){
	res.render('resume.html');
});

app.listen(3000,function(){
	console.log('Server up and running at port 3000');
})