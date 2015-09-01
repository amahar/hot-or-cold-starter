
$(document).ready(function(){

//random number generated
	function randomNumGen(){
	var randomNumb = Math.floor((Math.random() * 100) + 1);
	return randomNumb;
		};

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var compRandNumb = $('.new').on('click',function(){
  		return randomNumGen();
  	});

//Validate user input for non letters
  	var userValidInput = $("#guessButton").on('click', function(){
  		var valid = $('.text').val();
  		if (valid.match(/^[A-Za-z]+$/)) {
  			alert("please enter a numeric number")
  			valid.text('');
  			return false;
  		} else if(compRandNumb > valid){
  			alert ( "comp wins" )
  		} else {
  			alert( "user wins")
  		};

  	});	

  	

});


