window.onload = function(){
	setTimeout(startLanes, 1000);
	setTimeout(generateCars, 1000);
}

function generateCars(){
	var timeInterval = getInterval();

	setTimeout(spawnCar, timeInterval);

console.log(timeInterval);
}

function spawnCar(){
	console.log("here na po");
	var car = document.getElementById("cars");
	var car_num = generateCarNum();

	car.src = "../images/car"+ car_num + ".png";
	car.style.animation = "car_animation 5s linear";
}


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