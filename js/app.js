
$(document).ready(function(){
firstGuess = 0;
counter = 0;
	//random number generated
	function randomNumGen(){
	compRandNumb = Math.floor((Math.random() * 100) + 1);
		};

  	$('.new').on('click',function(){
  		randomNumGen();
  		reset();
  	});
//Validate user input and compare numbers 
  	var userValidInput = $("#guessButton").on('click', function(event){
  		numberAttempts();
  		console.log(compRandNumb);
  		console.log(firstGuess);
  		event.preventDefault();
  		if (firstGuess > 0) {
  				secondTry();
  				
  				return;
  			};
  			firstTry();
  			
   	});	
 		
 	function firstTry(){
		var valid = $('.text').val();
  					$('.text').val('');
  		var numAbsolute = Math.abs(valid - compRandNumb);
  		if (valid.match(/^[A-Za-z]+$/)) {
  			alert("please enter a numeric number")
  			valid.text('');
  			return false;
  		} else if(numAbsolute >= (50)) {
  			$('#feedback').text('Cold:Number entered '+ valid);
  				firstGuess = valid;
  		} else if((numAbsolute < 50 && numAbsolute > 0)) {
  			$('#feedback').text('Warm:Number entered '+ valid);
  				firstGuess = valid;
  		} else {
  			$('#feedback').text('You are a winner');
  		}
	}
	function secondTry(){
		var valid = $('.text').val();
  					$('.text').val('');
  		var numAbsolute = Math.abs(valid - compRandNumb);
  		var compareNum = Math.abs(firstGuess - compRandNumb);
  		if (valid.match(/^[A-Za-z]+$/)) {
  			alert("please enter a numeric number")
  			valid.text('');
  			return false;
  		} else if(numAbsolute >= (compareNum)) {
  			$('#feedback').text('Colder:Number entered '+ valid);
  				firstGuess = valid;
  		} else if((numAbsolute < compareNum && numAbsolute > 0)){
  			$('#feedback').text('Warmer:Number entered '+ valid);
  				firstGuess = valid;
  		} else {
  			$('#feedback').text('You are a winner');
  		}
	}
	function reset(){
		firstGuess = 0;
		$('#feedback').text('Make your Guess!');
	}
	function numberAttempts(){
		counter++;
		$('#count').text(counter);
	}
	randomNumGen();
});


