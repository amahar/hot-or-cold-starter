
$(document).ready(function(){
//Declare evil global variables	
firstGuess = 0;
counter = 0;

//User wants to play a new game
  	$('.new').on('click',function(){
  		randomNumGen();
  		reset();
  	});
//Validate user input and compare numbers 
  	$("#guessButton").on('click', function(event){
  		event.preventDefault();
  		 numberAttempts();
  		if (firstGuess > 0) {
  			secondTry();
  			return;
  		};
  			firstTry();	
   	});	
 
 //User attempts to guess on first try		
 	function firstTry(){
		var valid = $('.text').val();
		$('#guessList').append('<li>' + valid + '</li>')
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
//User continues with n tries
	function secondTry(){
		var valid = $('.text').val();
		$('#guessList').append('<li>' + valid + '</li>')
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
//User starts new game	
	function reset(){
		firstGuess = 0;
		counter = 0;
		$('#feedback').text('Make your Guess!');
		$('#count').text(0);
		$('#guessList li').remove();
	}

//User attempts
	function numberAttempts(){
		counter++;
		$('#count').text(counter);
	}

//Random number generated
	function randomNumGen(){
		compRandNumb = Math.floor((Math.random() * 100) + 1);
	}
//Initial run
randomNumGen();
});


