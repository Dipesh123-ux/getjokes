var btn = document.getElementById("btn");
var joke = document.getElementById("jokes");


btn.addEventListener("click", ()=>{

   fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d6addeb6c9mshd53bd8b5cb52a32p157655jsn7b80718c7670",
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
}).then((data) => {
    joke.innerHTML =  data.body[0].setup + "<br>" + data.body[0].punchline;
  
})
.catch(err => {
	console.error(err);
	joke.innerHTML = "Error can't fetch a joke"
});
    
})

