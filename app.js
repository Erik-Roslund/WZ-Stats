fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Ereich%25232102/battle", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ca80e9e0bemsh20dfbedd9e3a1e4p18ba1bjsn961ab30b9aa8",
		"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});