var time = 0;
var timed;
var pause_time = false;

window.onload = function(){
	setTimeout(startLanes, 1000);
	setTimeout(startCarLeft, 1000);
	setTimeout(startCarRight, 1000);

	document.addEventListener('keypress', carMove);	
	
	
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
	 	console.log(cookie_splitted);
	 }
}



// start leftCar functions
function startCarLeft(){
	var timeInterval = getInterval();

	setTimeout(spawnCar, timeInterval);

	// console.log(timeInterval);
}

function spawnCar(){
	console.log("spawnCar entered");

	var car = document.getElementById("carLeft");
	var car_num = generateCarNum();

	car.src = "../images/car"+ car_num + ".png";
	car.style.animation = "carLeft_animation 5s linear";
	car.style.visibility = "visible";

	car.addEventListener("animationend", hideCar);
	
}

function hideCar(){
	this.style.visibility = "hidden";
	this.style.animation = "initial";

	startCarLeft();
}
// end leftCar functions


// start rightlane functions
function startCarRight(){
	console.log("startCarLeft entered");
	var timeInterval = getInterval();

	setTimeout(spawnCar2, timeInterval);

	console.log(timeInterval);
}

function spawnCar2(){
	console.log("spawnCar entered");

	var car = document.getElementById("carRight");
	var car_num = generateCarNum();

	car.src = "../images/car"+ car_num + ".png";
	car.style.animation = "carRight_animation 5s linear";
	car.style.visibility = "visible";

	car.addEventListener("animationend", hideCar2);
	
}

function hideCar2(){
	this.style.visibility = "hidden";
	this.style.animation = "initial";

	startCarRight();
}

// end rightLane functions


function generateCarNum(){
	var car_num = Math.floor((Math.random() * 9))+ 1;
	return car_num;
}

function getInterval(){
	var interval = (Math.floor((Math.random() * 10) + 1)) * 1000;
	return interval; 
}

function startLanes(){
	var lane1 = document.getElementById("lane1");
	var lane2 = document.getElementById("lane2");
	var lane3 = document.getElementById("lane3");

	lane1.style.animation = "lane_animation1 1s linear infinite";
	lane2.style.animation = "lane_animation2 1s linear infinite";
	lane3.style.animation = "lane_animation3 1s linear infinite";
}

// ====CHIN-CHIN=======


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
	document.getElementById("home").addEventListener('click', back2home);
	document.getElementById("help").addEventListener('click',help);
	document.getElementById("resume").addEventListener('click', resume);
	//var pause_class = document.getElementById("pause_class");
	//pauseButton.removeAttribute("class");
	//pause_class.className = "glyphicon glyphicon-play";
	//pauseButton.addEventListener('click',resume);
}
function resume(){
	pause_time = false;
	var pauseButton = document.getElementById("pause");
	//var pause_class = document.getElementById("pause_class");
	//pause_class.className = "glyphicon glyphicon-pause";
	//pauseButton.removeEventListener('click',resume);
	//document.getElementById("pause").addEventListener('click', paused);
}
function help(){
	pause_time = true;
}