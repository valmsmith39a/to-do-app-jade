var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

/* GET add contacts form html */
router.get('/addContacts', function(req, res, next) {
  res.render('addContact', { title: 'Add Contact Form'});
});

/* Display contact details form html */
router.get('/contactDetails:index', function(req, res, next) {
	var index = req.params.index;
  fs.readFile('./contacts.json', function(err, data){
		// Parse JSON String into an object
		if(data == ''){
    	data = '[]';
    }
    var arrObj = JSON.parse(data);
    var objToDisplay = arrObj[index];
    res.render('contactDetails', {name:objToDisplay.name, phoneNumber:objToDisplay.phoneNumber, email:objToDisplay.email, address:objToDisplay.address, birthdate:objToDisplay.birthdate});
	});
});

module.exports = router;
