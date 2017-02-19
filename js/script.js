var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

var xhr = new XMLHttpRequest();

// implementacja funkcji getJoke()
function getJoke() {
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerText = response.value.joke;
  });
  xhr.send();
}

// automatyczne wyswietlenie bez koniecznosći klikania 
// przycisku po załadowaniu pliku
getJoke();


