var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('inside index router file')
	res.render('index', { title: 'Express' });
});

/* GET add contacts form html */
router.get('/addContacts', function(req, res, next) {
	console.log('inside GET /addContacts route in index.js server router file');
	// Get from DB
	// Add to list 
	// Write to DB 
	// Return to client 
  res.render('addContact', { title: 'Add Contact Form'});
});

/* Display contact details form html */
router.get('/contactDetails:index', function(req, res, next) {
	console.log('inside GET /contactsDetails route in index.js server router file');
	var index = req.params.index;
  fs.readFile('./contacts.json', function(err, data){
		// Parse JSON String into an object
		if(data == ''){
    	data = '[]';
    }
    var arrObj = JSON.parse(data);
    var objToDisplay = arrObj[index];
    res.render('contactDetails', {name:objToDisplay.name, number:objToDisplay.phoneNumber});
	});
});

module.exports = router;
