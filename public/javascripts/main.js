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

/*
function addContact(){
	console.log('inside add contact() in main.js');
	var name = 'Tom Brady' //$('#date-input').val();
	var phoneNumber = '111-1111'// $('#task-input').val();
	//var status = false;
  //var index = arrayOfTasksObjectsG.length;
	var contactObject={
				name:name,
	  		phoneNumber:phoneNumber,
	  	};

	arrayOfContactsObjectsG.push(contactObject);

  $.post('/users/addContact', contactObject)
	.success(function(data) {
  	// update array of containers 
  	updateArrayOfRowContainers();
  	displayTasksList();
  }).fail(function(err) {
    alert('something went wrong :(')
  });
}
*/
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
		var $nameColumn = $('<div>').addClass('name-col col-md-1 col-xs-3').text(contact.name); 
    $rowContainer.append($nameColumn); 
    var $numberColumn = $('<div>').addClass('number-col col-md-7 col-xs-3').text(contact.phoneNumber);
		$rowContainer.append($numberColumn);
		/*
    var completedFlag = JSON.parse(task.status); 
    var $completedCheckbox = $('<input>').addClass('completed-checkbox col-md-2 col-xs-3').attr('type', 'checkbox').attr('value', JSON.parse(completedFlag)).attr('id', 'complete-checkbox');

    if(completedFlag == true) {
    	$completedCheckbox.prop('checked', true); 
    }
    else {
    	$completedCheckbox.prop('checked', false); 
    }
    
    $rowContainer.append($completedCheckbox);
    */
    /*
    var $deleteButton = $('<div>').addClass('delete-button col-md-2 col-xs-3');
    var $deleteIcon = $('<i>').addClass('fa fa-trash');
    $deleteButton.append($deleteIcon);
    $rowContainer.append($deleteButton);
    */
    arrayOfRowContainersObjectsG.push($rowContainer);
	});
}

function displayRowContainers(){
	$('.contacts-list').append(arrayOfRowContainersObjectsG);
	//$('#contacts-input').val('');
}