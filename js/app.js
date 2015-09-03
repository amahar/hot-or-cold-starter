
$(document).ready(function(){

	//random number generated
	function randomNumGen(){
	compRandNumb = Math.floor((Math.random() * 100) + 1);
		};

  	$('.new').on('click',function(){
  		randomNumGen();
  	});

//Validate user input and compare numbers 
  	var userValidInput = $("#guessButton").on('click', function(event){
  		console.log(compRandNumb);
  		//var counter = 0;
  		//$('#count').text(counter);
  		event.preventDefault();
  		var valid = $('.text').val();
  					$('.text').val('');
  		var numAbsolute = Math.abs(valid - compRandNumb);
  		if (valid.match(/^[A-Za-z]+$/)) {
  			alert("please enter a numeric number")
  			valid.text('');
  			return false;
  		} else if(numAbsolute >= (50)){
  			alert('ice cold');
  		} else if (numAbsolute >= (30)) {
  			alert('cold');
  		} else if (numAbsolute >= (20)) {
  			alert('warm');
  		} else if (numAbsolute >= (10)) {
  			alert('hot');
  		} else if (numAbsolute >= (1)) {
  			alert('very hot');
  		} else {
  			alert('we have a winner ...dinggg dinggg')
  		}

  		//counter++;
  	});	

  	randomNumGen();
});


