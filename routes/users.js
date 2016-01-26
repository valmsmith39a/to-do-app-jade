var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET add contacts form html */
router.get('/', function(req, res, next) {
	console.log('inside GET / route in users.js server router file');
  /*
  res.render('users', { title: 'Add Contact Form'});
  res.send('respond with a resource');
  */
  
});

/* GET contacts from db */
router.get('/getContacts', function(req, res, next) {
	console.log('inside GET /users route in users.js server router file');
  fs.readFile('./contacts.json', function(err, data){
		if(data == ''){
    	data = '[]';
    }
  	res.end(data);
	});
});

// post task to server
router.post('/addContact', function(req, res) {
 console.log('inside POST /users route in users.js server router file');
  fs.readFile('./contacts.json', function(err, data) {
    if(err) return res.status(400).send(err);
    if(data == ''){
    	data = '[]';
    }
    var arr = JSON.parse(data);
    console.log('in post, before adding object', arr);
    var name = req.body.name;
    var phoneNumber = req.body.phoneNumber;
    var newContactObject = {
    	name:name,
    	phoneNumber:phoneNumber,
    }
    arr.push(newContactObject);
    console.log('in post, after adding object', arr);
    fs.writeFile('./contacts.json', JSON.stringify(arr), function(err) {
      if(err) return res.status(400).send(err);
      res.send(arr);
    });
  });
});

module.exports = router;
