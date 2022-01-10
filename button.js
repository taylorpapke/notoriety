function changeColor() {
  var blueDiv = document.getElementById("changeable");
  blueDiv.setAttribute('class', 'darkorange half');
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "your-api-key-here",
      "x-rapidapi-host": "api-host-here",
    },
  })
    .then((response) => {
        response.json().then((responseBody) => {
          console.log(responseBody.word);
          wordable.textContent = responseBody.word
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
