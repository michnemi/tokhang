var time = 0;
var timed;
var pause_time = false;
window.onload = function(){
	document.addEventListener('keypress', carMove);	
	document.getElementById("home").addEventListener('click', back2home);
	document.getElementById("pause").addEventListener('click', paused);
	setTimeout(timeStarter,3000);
	
}




function carMove(event){
	//console.log("I entered the carMove");
	// var num = "10%";
	// numb = parseInt(num);
	// console.log(num);
	
	
	console.log(event.charCode);
		
		if (event.charCode == 97) {
			console.log("I pressed A");
			
			document.getElementById("police").style.marginLeft = 25 + "%";
			}
		else if(event.charCode==100){
			//console.log(margin);
			console.log("I pressed D");
			document.getElementById("police").style.marginLeft = 60 + "%" ;
				}
		else if (event.charCode==32) {
			console.log("I pressed SPACE");
			//document.getElementById("police").style.marginTop = -350 + "px";
			// document.addEventListener('keyup',function(){
			// 	document.getElementById("police").style.marginTop = -200 + "px";
			//});
			jumpCar();
		}

}
function timeStarter(){
	timed = setInterval(timer, 1000);
}
function jumpCar(){
	document.getElementById("police").style.marginTop = -350 + "px";
	setTimeout(function(){
		document.getElementById("police").style.marginTop = -200 + "px";
	},500);
}

function timer(){
		if (pause_time==true) {
			time = time;
		}
		else{
		time++;
		document.getElementById("timer").innerHTML = time + " s";
		}
		
}
function back2home(){
	pause_time = true;
	var answer = confirm("are you sure you want to quit?");
	if (answer==true) {
			document.location.href = "../../MP2.html";	
	}
	else{
		pause_time = false;
	}
}
function paused(){
	pause_time = true;
	var pauseButton = document.getElementById("pause");
	pauseButton.className = "glyphicon glyphicon-play";
	pauseButton.addEventListener('click',resume);

}
function resume(){
	pause_time = false;
	var pauseButton = document.getElementById("pause");
	pauseButton.className = "glyphicon glyphicon-pause";
	pauseButton.removeEventListener('click',resume);
	document.getElementById("pause").addEventListener('click', paused);
	
}