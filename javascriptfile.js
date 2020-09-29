let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");
let counter=0;
function jump()
{

	if(character.classList == "animate") {return} character.classList.add("animate");

	setTimeout(function(){character.classList.remove("animate")},300);
}

let checkDead = setInterval(function() 
	{
		let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
		let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
		
		if(obstacleLeft<20 && obstacleLeft>-20 && characterTop>=130)
		{
			obstacle.style.animation = "none";
			alert("GAME OVER! FINAL SCORE: "+Math.floor(counter/100));
			counter=0;
			obstacle.style.animation = "obstacle 1s infinite linear";
		}
		
		else
		{

			counter++;
			document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
		
		}
	}, 10);
