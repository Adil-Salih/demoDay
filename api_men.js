
let button = document.querySelector("button");
let menDiv = document.getElementById("men-div");
let menP = document.getElementById("menP");

button.onclick = function(event){
    event.preventDefault();
    const url = "https://api.quotable.io/quotes/random";

    fetch(url)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(quoteJSON) {
      console.log(quoteJSON);

        menP.innerHTML = JSON.stringify(quoteJSON[0].content);
    });
    
}
