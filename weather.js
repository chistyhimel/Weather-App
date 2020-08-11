const api = {
  key: "41dd09db9477cb4e7ac7117695b49c5f",
  url: "http://api.openweathermap.org/data/2.5/weather?q=",
};
const searchBox = document.querySelector(".search-box");

document.querySelector(".searchBtn").addEventListener("click", function () {
  getResponse(searchBox.value);
});

function getResponse(query) {
  fetch(`${api.url}${query}&units=metric&APPID=${api.key}`)
    .then((response) => response.json())
    .then((response) => afterResponse(response));
}

function afterResponse(query) {
  console.log(query);
  document.querySelector(
    ".city"
  ).innerHTML = `<i class="fas fa-map-marker-alt text-white mr-1 pt-4 text-danger"></i> ${query.name} , ${query.sys.country}`;

  document.querySelector(".temp").innerHTML = `${Math.round(
    query.main.temp
  )}<span> °c</span>`;

  document.querySelector(".weather").innerText = query.weather[0].main;

  document.querySelector(
    ".weatherIcon"
  ).innerHTML = `<img src="http://openweathermap.org/img/wn/${query.weather[0].icon}@2x.png">`;

  document.querySelector(".hi-low").innerText = `${Math.round(
    query.main.temp_min
  )} °c / ${Math.round(query.main.temp_max)} °c`;
}
