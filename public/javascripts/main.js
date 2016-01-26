$(document).ready(init);

var arrayOfContactsObjectsG = [];
var arrayOfRowContainersObjectsG = [];

function init(){
	console.log('inside init of main.js');
	$('.contacts-list').on('click', '.name-col', displayContactDetails);
	$('.contacts-list').on('click', '.number-col', displayContactDetails);
	getContacts(); 
}

function displayContactDetails(){
	var index = $(this).closest('.row-container').index();
	location.href = '/contactDetails' + index;
}

function getContacts(){
	console.log('inside getContacts() in main.js');
	$.get('/users/getContacts', function(data) {
			arrayOfContactsObjectsG = JSON.parse(data); 
			console.log('array of contacts objects array TYPE ', typeof arrayOfContactsObjectsG);
			updateArrayOfRowContainers();
			displayRowContainers(); 
   });
}

function updateArrayOfRowContainers(){
	$('.contacts-list').empty(); 
	arrayOfRowContainersObjectsG.splice(0, arrayOfRowContainersObjectsG.length);

	arrayOfContactsObjectsG.map(function(contact){
		var $rowContainer = $('<div>').addClass('row row-container');
		var $nameColumn = $('<div>').addClass('name-col col-md-2 col-xs-2').text(contact.name); 
    $rowContainer.append($nameColumn); 
    var $numberColumn = $('<div>').addClass('number-col col-md-2 col-xs-2').text(contact.phoneNumber);
		$rowContainer.append($numberColumn);
		
    arrayOfRowContainersObjectsG.push($rowContainer);
	});
}

function displayRowContainers(){
	$('.contacts-list').append(arrayOfRowContainersObjectsG);
	//$('#contacts-input').val('');
}