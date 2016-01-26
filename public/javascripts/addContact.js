$(document).ready(init);

function init(){
	console.log('inside init of main.js');	
	$('#add-contact-btn').on('click', addContact);
}

function addContact(){
	console.log('inside add contact() in addContact.js');
	var name = $('#input-name').val();
	var phoneNumber = $('#input-phone-number').val();
	var contactObject={
				name:name,
	  		phoneNumber:phoneNumber,
	  	};

  $.post('/users/addContact', contactObject)
	.success(function(data) {
		location.href = '/';
  }).fail(function(err) {
    alert('something went wrong :(')
  });	
}