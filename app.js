
var output = document.getElementById("output1");
// var container = document.getElementById("container");

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();
	let playerInput = document.querySelector("[data-input-player-name]").value;
	let platform = document.getElementsByName("platform");
	let playerName = playerInput.replace("#", "%2523");
	console.log(playerName);
	console.log(platform);
	presentUserStats(playerName, platform, playerInput);

})

//Present user stats

function presentUserStats(playerName, platform) {
	for (let i = 0; i < 3; i++) {
		if (platform[i].checked) {
			console.log(platform[i].value)
			fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/" + playerName + "/" + platform[i].value, {
				"method": "GET",
				"headers": {
					"x-rapidapi-key": "ca80e9e0bemsh20dfbedd9e3a1e4p18ba1bjsn961ab30b9aa8",
					"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
				}
			})

				.then(response => response.json())
				.then((data) => {
					document.querySelector("#output1").innerHTML = " ";
					// let	nameTitle = document.createElement("h2");
					// nameTitle.innerText = playerInput;
					// output.append(nameTitle);
					
					output.append(playerStatBr(data.br.kdRatio, data.br.kills, data.br.deaths, data.br.wins, data.br.topFive, data.br.timePlayed, data.br.gamesPlayed, data.br.contracts));
					// output.append(playerStatBrDmz(data.br_dmz.kdRatio, data.br_dmz.kills, data.br_dmz.deaths, data.br_dmz.wins, data.br_dmz.topFive, data.br_dmz.timePlayed, data.br_dmz.gamesPlayed, data.br_dmz.contracts));
				})
				.catch(err => {
					console.error(err);
				});
		}
	}

}

//BattleRoyale Stats

function playerStatBr(kdRatio, kills, deaths, wins, topFive, timePlayed, gamesPlayed, contracts) {
	let BrItems = document.createElement("div");
	BrItems.classList.add("items");

	let BrItemsHead = document.createElement("div");
	BrItemsHead.classList.add("items-head");
	BrItems.append(BrItemsHead);


	//KD
	let playerKdStat = document.createElement("div");
	playerKdStat.innerText = "KD: " + kdRatio.toFixed(2);
	playerBrStatContainer.append(playerKdStat);

	//Kills-stat
	let playerKillStat = document.createElement("div");
	playerKillStat.innerText = "Kills: " + kills;
	playerBrStatContainer.append(playerKillStat);

	//Deaths-stat
	let playerDeathStat = document.createElement("div");
	playerDeathStat.innerText = "Deaths: " + deaths;
	playerBrStatContainer.append(playerDeathStat);

	//Contract-stat
	let playerContractsStat = document.createElement("div");
	playerContractsStat.innerText = "Contracts: " + contracts;
	playerBrStatContainer.append(playerContractsStat);

	//Wins-stat
	let playerWinsStat = document.createElement("div");
	playerWinsStat.innerText = "Wins: " + wins;
	playerBrStatContainer.append(playerWinsStat);

	//Top5-stat
	let playerTopFiveStat = document.createElement("div");
	playerTopFiveStat.innerText = "Top 5: " + topFive;
	playerBrStatContainer.append(playerTopFiveStat);

	//Playtime-stat
	let playerPlayTimeStat = document.createElement("div");
	playerPlayTimeStat.innerText = "Playtime: " + Math.round((timePlayed / 60) / 60) + " h";
	playerBrStatContainer.append(playerPlayTimeStat);

	//GamesPlayed-stat
	let playerGamesPlayedStat = document.createElement("div");
	playerGamesPlayedStat.innerText = "Games Played: " + gamesPlayed;
	playerBrStatContainer.append(playerGamesPlayedStat);

	return playerBrStatContainer;
}

//Plunder Stats

// function playerStatBrDmz(kdRatio, kills, deaths, wins, topFive, timePlayed, gamesPlayed, contracts) {
// 	let playerBrDmzStatContainer = document.createElement("div");
// 	playerBrDmzStatContainer.classList.add("player-stat-container");

// 	let brDmzTitle = document.createElement("h3");
// 	brDmzTitle.innerText = "Plunder";
// 	playerBrDmzStatContainer.append(brDmzTitle);


// 	//KD
// 	let playerKdStat = document.createElement("div");
// 	playerKdStat.innerText = "KD: " + kdRatio.toFixed(2);
// 	playerBrDmzStatContainer.append(playerKdStat);

// 	//Kills-stat
// 	let playerKillStat = document.createElement("div");
// 	playerKillStat.innerText = "Kills: " + kills;
// 	playerBrDmzStatContainer.append(playerKillStat);

// 	//Deaths-stat
// 	let playerDeathStat = document.createElement("div");
// 	playerDeathStat.innerText = "Deaths: " + deaths;
// 	playerBrDmzStatContainer.append(playerDeathStat);

// 	//Contract-stat
// 	let playerContractsStat = document.createElement("div");
// 	playerContractsStat.innerText = "Contracts: " + contracts;
// 	playerBrDmzStatContainer.append(playerContractsStat);

// 	//Wins-stat
// 	let playerWinsStat = document.createElement("div");
// 	playerWinsStat.innerText = "Wins: " + wins;
// 	playerBrDmzStatContainer.append(playerWinsStat);

// 	//Top5-stat
// 	let playerTopFiveStat = document.createElement("div");
// 	playerTopFiveStat.innerText = "Top 5: " + topFive;
// 	playerBrDmzStatContainer.append(playerTopFiveStat);

// 	//Playtime-stat
// 	let playerPlayTimeStat = document.createElement("div");
// 	playerPlayTimeStat.innerText = "Playtime: " + Math.round((timePlayed / 60) / 60) + " h";
// 	playerBrDmzStatContainer.append(playerPlayTimeStat);

// 	//GamesPlayed-stat
// 	let playerGamesPlayedStat = document.createElement("div");
// 	playerGamesPlayedStat.innerText = "Games Played: " + gamesPlayed;
// 	playerBrDmzStatContainer.append(playerGamesPlayedStat);

// 	return playerBrDmzStatContainer;
// }
