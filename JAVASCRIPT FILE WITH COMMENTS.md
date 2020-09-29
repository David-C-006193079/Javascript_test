# Javascript_test



I had comments on the javascript file but they were breaking my game,
so here is the version with comments



let character = document.getElementById("character");							                                    //let used to assign an object with propterties from the the div ID character
let obstacle = document.getElementById("obstacle");						                                      	//let used to assign an object with propterties from the the div ID obstacle
let counter=0;												                                                                 //assigns a value to a element
function jump()												
{													

	if(character.classList != "animate") {return} character.classList.add("animate");		                  //used to add the stylesheet property to character
												                                                                               	//function used to apply a stylesheet property to our character object. 
	setTimeout(function(){character.classList.remove("animate")},300);			                            	//this property then moves the block in an upward motion simulating jump
													//used to remove the stylesheet property to simulate the fall down back to the spot 
}
let check_if_end = setInterval(function() 
	{
		let character_top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));           //element "character_top" assigned the value of the top from the div id character 
		let obstacle_left = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));           //element "obstacle_left" assigned the value of the left from the div id obstacle 
		
		if(obstacle_left<20 && obstacle_left>-20 && character_top>=130) 			                              //Used to end the game.
		{	
						     						                                                                           	//Essentially, if the green block is in the region  
			obstacle.style.animation = "none";					                                                    	//where the red block is and the red block is not at a designated height that would passes over 
			alert("GAME OVER! FINAL SCORE: "+Math.floor(counter/100));		                                  	//totals the score and ends game 
													
			counter=0;									
			obstacle.style.animation = "obstacle 1s infinite linear";			
		
		}
		
		else
		{

			counter++;
			document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);	
     //adds the the counter that started at zero and keeps adding until the first condition is met
		
		}
	}, 10);
