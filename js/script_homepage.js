var player_id = "player" + 1 ;
var player_cookie;
var cookie_splitted;
window.onload = function(){
	document.getElementById("newgame").onclick = gameStart;
	document.getElementById("leaderboard").onclick = leaderboard;

	document.cookie = player_cookie;
	console.log(document.cookie);
	cookie_split = document.cookie.split("; ");
	for (i=0; i<cookie_split.length; i++) {
	 	cookie_splitted = cookie_split[i].split("=");
	 	console.log(cookie_splitted);
	 	player_list = document.getElementById("player_list");
	 	old = player_list.innerHTML;
	 	player_list.innerHTML = old + "<br>" + cookie_splitted[0] + ": " + cookie_splitted[1];

	 	// for (x = 0; x<1; x++) {
	 	// 	document.getElementById("lastplayers").innerHTML += "<br>" + cookie_splitted[1];
	 	// }
	 }
}
function gameStart(){
	
	var player_name = prompt("Please enter you name: ");
	var player_list = document.getElementById("player_list");
	console.log("i clicked new game");
	player_cookie = "Rank" + (cookie_split.length + 1) + "=" + player_name;
	document.cookie = player_cookie;
	if (player_name==null) {
		return;
	}
	else{

		console.log(document.cookie);

		document.location.href = "game.html";
		console.log("I entered");

	}

}

function leaderboard(){
	console.log("I clicked leaderboard");
	document.getElementById("panel").style.display="block";
}

