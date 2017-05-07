var time = 0;
var timed;
var pause_time = false;
var carLeftTime = 0;
var carRightTime = 0;
var carTimer;
var gameStart = 1;
var collide = false;
var cookie_splitted;
var player_name;
window.onload = function(){
	printname();

	document.getElementById("police").style.marginLeft = "-890px";
	checkStatus();
	document.addEventListener('keypress', carMove);	
	setTimeout(startLanes, 1000);
	setTimeout(startCarLeft, 1000);
	setTimeout(startCarRight, 1000);
	

	
	
	setTimeout(function(){
		document.getElementById("cue").innerHTML = "READY!";
	},0);
	setTimeout(function(){
		document.getElementById("cue").innerHTML = "SET!";
	},1000);
	setTimeout(function(){
		document.getElementById("cue").innerHTML = "GO!";
	},2000);
	setTimeout(function(){
		document.getElementById("cue").innerHTML = "";
	},3000);
	setTimeout(timeStarter,3000);
	setTimeout(eventAdder,3000);
	//console.log(document.cookie);
	cookie_split = document.cookie.split("; ");
	for (i=0; i<cookie_split.length; i++) {
	 	cookie_splitted = cookie_split[i].split("=");
	 	console.log(cookie_splitted[1]);
	 	player_name = cookie_splitted[1];
	 }

}






function checkStatus(){
	var carLeft = document.getElementById("carLeft");
	var carRight = document.getElementById("carRight");
	var police = document.getElementById("police");
	var game_over = document.getElementById("gameover");
	var gameover_home = document.getElementById("home_icon_holder");
	var gameover_restart = document.getElementById("restart_icon_holder");
	var hit = 0;

	if(police.style.marginLeft == "-890px" && police.style.marginTop == "524px" && carLeftTime == 4){
		pause_time = true;
		collide = true;
		laneStatus("paused");
		carStatus("paused");
		console.log("hit");
		game_over.style.display = "block";
		gameover_home.style.visibility = "visible";
		gameover_restart.style.visibility = "visible";
		gameover_restart.addEventListener('click', restart);
		gameover_home.addEventListener('click',back2home);
		document.removeEventListener("keypress",carMove);
		var pauseButton = document.getElementById("pause");
		pauseButton.disabled = "disabled";
		setTimeout(savecookies, 1000);
		checkStatus = false;
	}

	else if(police.style.marginLeft == "-400px" && police.style.marginTop == "524px" && carRightTime == 4){
		pause_time = true;
		collide = true;
		laneStatus("paused");
		carStatus("paused");
		console.log("hit");
		game_over.style.display = "block";
		gameover_home.style.visibility = "visible";
		gameover_restart.style.visibility = "visible";
		document.removeEventListener("keypress",carMove);
		var pauseButton = document.getElementById("pause");
		pauseButton.disabled = "disabled";
		setTimeout(savecookies, 1000);
		checkStatus = false;	
	}

	setTimeout(checkStatus, 100);
}



// start leftCar functions
function startCarLeft(){
	if(time==10){
		var timeInterval = (Math.floor((Math.random() * 6) + 1)) * 1000;
	}
	else{
		var timeInterval = (Math.floor((Math.random() * 10) + 1)) * 1000;
	}
	setTimeout(spawnCar, timeInterval);

}

function spawnCar(){
	console.log("spawnCar entered");

	var car = document.getElementById("carLeft");
	var car_num = generateCarNum();

	car.src = "../images/car"+ car_num + ".png";
	car.style.animation = "carLeft_animation 4s linear";
	car.style.visibility = "visible";
	getCarLeftTime();

	car.addEventListener("animationend", hideCar);
	
}

function hideCar(){
	this.style.visibility = "hidden";
	this.style.animation = "initial";
	clearTimeout(carTimer);
	carLeftTime = 0;

	startCarLeft();
}

function getCarLeftTime(){
	carLeftTime += 1;
	carTimer = setTimeout(getCarLeftTime, 1000);
}
// end leftCar functions


// start rightlane functions
function startCarRight(){
	console.log("startCarLeft entered");

	if(time==10){
		var timeInterval = (Math.floor((Math.random() * 6) + 1)) * 1000;
	}
	else{
		var timeInterval = (Math.floor((Math.random() * 10) + 1)) * 1000;
	}
	
	setTimeout(spawnCar2, timeInterval);

}

function spawnCar2(){
	console.log("spawnCar entered");

	var car = document.getElementById("carRight");
	var car_num = generateCarNum();

	car.src = "../images/car"+ car_num + ".png";
	car.style.animation = "carRight_animation 4s linear";
	car.style.visibility = "visible";
	getCarRightTime();

	car.addEventListener("animationend", hideCar2);
	
}

function hideCar2(){
	this.style.visibility = "hidden";
	this.style.animation = "initial";
	carRightTime = 0;

	startCarRight();
}

function getCarRightTime(){
	carRightTime += 1;
	carTimer = setTimeout(getCarRightTime, 1000);
}

// end rightLane functions


function generateCarNum(){
	var car_num = Math.floor((Math.random() * 9))+ 1;
	return car_num;
}

function startLanes(){
	var lane1 = document.getElementById("lane1");
	var lane2 = document.getElementById("lane2");
	var lane3 = document.getElementById("lane3");


	lane1.style.animation = "lane_animation1 1s linear infinite";
	lane2.style.animation = "lane_animation2 1s linear infinite";
	lane3.style.animation = "lane_animation3 1s linear infinite";
	
}

function laneStatus(status){
	var lane1 = document.getElementById("lane1");
	var lane2 = document.getElementById("lane2");
	var lane3 = document.getElementById("lane3");

	lane1.style.animationPlayState = status;
	lane2.style.animationPlayState = status;
	lane3.style.animationPlayState = status;
}

function carStatus(status){
	var carLeft = document.getElementById("carLeft");
	var carRight = document.getElementById("carRight");


	if(status=="paused"){
		carLeft.style.animationPlayState = "paused";
		carRight.style.animationPlayState= "paused";
	}
	carLeft.style.animationPlayState = status;
	carRight.style.animationPlayState= status;
}

//----CHINCHIN----

function eventAdder(){
	var pauseButton = document.getElementById("pause");
	pauseButton.disabled = false;
	pauseButton.addEventListener('click', paused);	
	pauseButton.setAttribute("data-toggle", "modal");
	pauseButton.setAttribute("data-target", "#pause_modal");

}


function carMove(event){
	//console.log("I entered the carMove");
	// var num = "10%";
	// numb = parseInt(num);
	// console.log(num);
	
	
	console.log(event.keyCode);
		
		if (event.charCode == 97) {
			console.log("I pressed A");
			
			document.getElementById("police").style.marginLeft = -890 + "px";
			document.getElementById("police").style.marginTop = 524 + "px";
			}
		else if(event.charCode==100){
			console.log("I pressed D");
			document.getElementById("police").style.marginLeft = -400 + "px" ;
			document.getElementById("police").style.marginTop = 524 + "px";
				}
		else if (event.charCode==32) {
			console.log("I pressed SPACE");
			jumpCar();
		}

}
function timeStarter(){
	timed = setInterval(timer, 1000);
}
function jumpCar(){
	document.getElementById("police").style.marginTop = 250 + "px";
	setTimeout(function(){
		document.getElementById("police").style.marginTop = 524 + "px";
	},1000);
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
	if (answer==true||collide==true) {
			document.location.href = "MP2.html";	
	}
	else{
		pause_time = false;
	}
}
function paused(){
	pause_time = true;
	var pauseButton = document.getElementById("pause");
	document.getElementById("home").addEventListener('click', back2home);
	document.getElementById("help").addEventListener('click',help);
	document.getElementById("resume").addEventListener('click', resume);
	document.getElementById("restart").addEventListener('click',restart);
	document.removeEventListener("keypress",carMove);
	carStatus("paused");
	laneStatus("paused");
	//var pause_class = document.getElementById("pause_class");
	//pauseButton.removeAttribute("class");
	//pause_class.className = "glyphicon glyphicon-play";
	//pauseButton.addEventListener('click',resume);
}
function resume(){
	pause_time = false;
	document.addEventListener("keypress",carMove);
	var pauseButton = document.getElementById("pause");
	//var pause_class = document.getElementById("pause_class");
	//pause_class.className = "glyphicon glyphicon-pause";
	//pauseButton.removeEventListener('click',resume);
	//document.getElementById("pause").addEventListener('click', paused);
}
function help(){
	pause_time = true;
}
function restart(){
	document.location.href ="game.html";
}

function printname(){
	//console.log(player_name);
	cookie_split = document.cookie.split("; ");
	for (i=0; i<cookie_split.length; i++) {
	 	cookie_splitted = cookie_split[i].split("=");
	 	console.log(cookie_splitted[1]);
	 	player_name = cookie_splitted[1];
	 }
	document.getElementById("player_name").innerHTML = player_name;
}
function savecookies(){
	cookie_split = document.cookie.split("; ");
	for (i=0; i<cookie_split.length; i++) {
	 	cookie_splitted = cookie_split[i].split("=");
	 	
	 }
	 unique_name = cookie_splitted[0];
	 player_name = cookie_splitted[1];
	 player_name = player_name + " > " + time;
	  console.log(player_name);
	 document.cookie = unique_name + "=" + player_name;
	
}