$(document).ready(init);

function init(){
	console.log('inside init of main.js');	
	$('#add-contact-btn').on('click', addContact);
}

function addContact(){
	console.log('inside add contact() in addContact.js');
	var name = $('#input-name').val();
	var phoneNumber = $('#input-phone-number').val();
	var email = $('#input-email').val();
	var address = $('#input-address').val();
	var birthdate = $('#input-birthdate').val();

	var contactObject={
				name:name,
	  		phoneNumber:phoneNumber,
	  		email:email, 
	  		address:address, 
	  		birthdate:birthdate
	  	};

  $.post('/users/addContact', contactObject)
	.success(function(data) {
		location.href = '/';
  }).fail(function(err) {
    alert('something went wrong :(')
  });	
}