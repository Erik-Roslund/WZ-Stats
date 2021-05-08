
var output = document.getElementById("output1");
var statTitle = " "
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
					console.log(data);					
					for(i = 0; i < 3; i++){
						if (i = 1){
							statTitle = "Battle Royale"
							output.append(playerStatBr(data.br.kdRatio, data.br.kills, data.br.deaths, data.br.wins, data.br.topFive, data.br.timePlayed, data.br.gamesPlayed, data.br.contracts));
						}
						if (i = 2){
							statTitle = "Plunder"
							output.append(playerStatBr(data.br_dmz.kdRatio, data.br_dmz.kills, data.br_dmz.deaths, data.br_dmz.wins, data.br_dmz.topFive, data.br_dmz.timePlayed, data.br_dmz.gamesPlayed, data.br_dmz.contracts));							
						}
						if (i = 3){
							statTitle = "Overall"
							output.append(playerStatBr(data.br_all.kdRatio, data.br_all.kills, data.br_all.deaths, data.br_all.wins, data.br_all.topFive, data.br_all.timePlayed, data.br_all.gamesPlayed, data.br_all.contracts));

						}
					}
				})
				.catch(err => {
					console.error(err);
				});
		}
	}

}

//BattleRoyale Stats

function playerStatBr(kdRatio, kills, deaths, wins, topFive, timePlayed, gamesPlayed, contracts) {
	
	//div items
	let BrItems = document.createElement("div");
	BrItems.classList.add("items");

		//div items-head
		let BrItemsHead = document.createElement("div");
		BrItemsHead.classList.add("items-head");
		BrItems.append(BrItemsHead);

			//p title
			let BrTitle = document.createElement("p");
			BrTitle.innerText = statTitle;
			BrItemsHead.append(BrTitle);

		//div items-body
		let BrItemsBody = document.createElement("div");
		BrItemsBody.classList.add("items-body");
		BrItems.append(BrItemsBody);

			//div items-body-content KD
			let BrItemsBodyKd = document.createElement("div");
			BrItemsBodyKd.classList.add("items-body-content");
			BrItemsBody.append(BrItemsBodyKd);

				//KD
				let playerKdStat = document.createElement("span");
				playerKdStat.innerText = "KD: " + kdRatio.toFixed(2);
				BrItemsBodyKd.append(playerKdStat);


			//div items-body-content KILLS
			let BrItemsBodyKill = document.createElement("div");
			BrItemsBodyKill.classList.add("items-body-content");
			BrItemsBody.append(BrItemsBodyKill);	
				
				//Kills-stat
				let playerKillStat = document.createElement("span");
				playerKillStat.innerText = "Kills: " + kills;
				BrItemsBodyKill.append(playerKillStat);

			//div items-body-content DEATHS
			let BrItemsBodyDeath = document.createElement("div");
			BrItemsBodyDeath.classList.add("items-body-content");
			BrItemsBody.append(BrItemsBodyDeath);
				
				//Deaths-stat
				let playerDeathStat = document.createElement("span");
				playerDeathStat.innerText = "Deaths: " + deaths;
				BrItemsBodyDeath.append(playerDeathStat);

			//div items-body-content CONTRACT
			let BrItemsBodyContract = document.createElement("div");
			BrItemsBodyContract.classList.add("items-body-content");
			BrItemsBody.append(BrItemsBodyContract);			
				
				//Contract-stat
				let playerContractsStat = document.createElement("span");
				playerContractsStat.innerText = "Contracts: " + contracts;
				BrItemsBodyContract.append(playerContractsStat);

			//div items-body-content WIN
			let BrItemsBodyWin = document.createElement("div");
			BrItemsBodyWin.classList.add("items-body-content");
			BrItemsBody.append(BrItemsBodyWin);

				//Wins-stat
				let playerWinsStat = document.createElement("span");
				playerWinsStat.innerText = "Wins: " + wins;
				BrItemsBodyWin.append(playerWinsStat);

			//div items-body-content TOP5
			let BrItemsBodyTop5 = document.createElement("div");
			BrItemsBodyTop5.classList.add("items-body-content");
			BrItemsBody.append(BrItemsBodyTop5);

				//Top5-stat
				let playerTopFiveStat = document.createElement("span");
				playerTopFiveStat.innerText = "Top 5: " + topFive;
				BrItemsBodyTop5.append(playerTopFiveStat);

			//div items-body-content PLAYTIME
			let BrItemsBodyPlaytime = document.createElement("div");
			BrItemsBodyPlaytime.classList.add("items-body-content");
			BrItemsBody.append(BrItemsBodyPlaytime);

				//Playtime-stat
				let playerPlayTimeStat = document.createElement("span");
				playerPlayTimeStat.innerText = "Playtime: " + Math.round((timePlayed / 60) / 60) + " h";
				BrItemsBodyPlaytime.append(playerPlayTimeStat);

			//div items-body-content GAMESPLAYED
			let BrItemsBodyGames = document.createElement("div");
			BrItemsBodyGames.classList.add("items-body-content");
			BrItemsBody.append(BrItemsBodyGames);

				//GamesPlayed-stat
				let playerGamesPlayedStat = document.createElement("span");
				playerGamesPlayedStat.innerText = "Games Played: " + gamesPlayed;
				BrItemsBodyGames.append(playerGamesPlayedStat);

	return BrItems;
}