
var output = document.getElementById("output");

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();
	let playerInput = document.querySelector("[data-input-player-name]").value;
	let platform = document.querySelector("[data-input-platform]").value;
	let playerName = playerInput.replace("#", "%2523");
	console.log(playerName);
	presentUserStats(playerName, platform);

})


function presentUserStats(playerName, platform) {
	fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/" + playerName + "/" + platform, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "ca80e9e0bemsh20dfbedd9e3a1e4p18ba1bjsn961ab30b9aa8",
			"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
		}
	})
	.then(response => response.json())
	.then((data) => {
		console.log(data);
		console.log(platform)
		output.append(playerStatCard(data.br.kdRatio, data.br.kills, data.br.deaths));
	})
	.catch(err => {
		console.error(err);
	});
}


function playerStatCard(kdRatio, kills, deaths) {
	let playerStatContainer = document.createElement("div");
	playerStatContainer.classList.add("player-stat-container");
	
	//KD
	let playerKdStat = document.createElement("div");
	playerKdStat.innerText = "KD: " + kdRatio;
	playerStatContainer.append(playerKdStat);

	//Kills-stat
	let playerKillStat = document.createElement("div");
	playerKillStat.innerText = "Kills: " + kills;
	playerStatContainer.append(playerKillStat);

	//Deaths-stat
	let playerDeathStat = document.createElement("div");
	playerDeathStat.innerText = "Deaths: " + deaths;
	playerStatContainer.append(playerDeathStat);
	

	return playerStatContainer;
}

