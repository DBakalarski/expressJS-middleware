var express = require('express');

var app = express();

app.use('/main', function(req, res, next){
    console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
    next();
});

app.use('/store', function(req, res, next) {
	console.log('Jestem pośrednikiem przy żądaniu do /store');
	next();
});

app.get('/main', function(req, res) {
	console.log('Otrzymanie żądanie GET od strony glównej');
	res.send('Hello world!');
});

app.get('/store', function(req, res) {
	res.send('To jest sklep');
	console.log('To jest sklep')
});

app.use(function(req, res) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

app.listen(3000);

/*app.get('/list_user', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});

app.get('/', function(req, res) {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});

app.post('/', function (req, res) {
	console.log('Otrzymanie żądanie POST od strony glównej');
	res.send('Hello SEND')
});

app.delete('/del_user', function(req, res) {
	console.log('Otrzymanie żądanie DELETE od strony /del_user');
	res.send('Hello DELETE!')
});
*/
