const api = {
  key:'41dd09db9477cb4e7ac7117695b49c5f',
  base:'http://api.openweathermap.org/data/2.5/'
}

const searchBox =  document.querySelector('.search-box');

searchBox.addEventListener('keypress',setQuery);

function setQuery(evt){
  if(evt.keyCode == 13){
    getResults(searchBox.value);
    console.log(searchBox.value)
  }
}
function getResults(query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(response => response.json())
  .then(response=> responseFromServer(response))
}

function responseFromServer(query){
  console.log(query);
  let city = document.querySelector('.location .city');
  city.innerText = `${query.name}, ${query.sys.country}`;
  // let now = new Date();
  // let date = document.querySelector('.location .date');
  // date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(query.main.temp)}<span> °c</span>`;

  let weather = document.querySelector('.current .weather');
  weather.innerText = query.weather[0].main;

  let tempHiLow = document.querySelector('.current .hi-low');
  tempHiLow.innerText = `${Math.round(query.main.temp_min)} °c / ${Math.round(query.main.temp_max)} °c`
}

// function dateBuilder(query){

// }

