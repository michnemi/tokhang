window.onload = function(){
	// startLanes;
	setTimeout(startLanes, 1000);
}

function startLanes(){
	console.log("start lanes");
	var lane1 = document.getElementById("lane1");
	var lane2 = document.getElementById("lane2");
	var lane3 = document.getElementById("lane3");

	lane1.style.animation = "lane_animation1 1s linear infinite";
	lane2.style.animation = "lane_animation2 1s linear infinite";
	lane3.style.animation = "lane_animation3 1s linear infinite";
}