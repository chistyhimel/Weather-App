
// class Weather {
//   constructor(city) {
//     this.apiKey = "41dd09db9477cb4e7ac7117695b49c5f";
//     this.city = city;
//   }
// }

const inputCity = document.getElementById('input-city');

document.getElementById('enterBtn').addEventListener('click',()=>{
    getWeather()
    
})



async function getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=41dd09db9477cb4e7ac7117695b49c5f`
    );
  
    const responseData = await response.json();
    responseFromServer(responseData);
  }
  

function responseFromServer(responseData){
  
  const main = responseData.main.temp;
  const finalTemp = Math.round(main-273.15);
  document.getElementById('temp').innerText =finalTemp;


  document.getElementById('cityName').innerText = `${responseData.name} , ${responseData.sys.country}`;

  console.log(responseData);
}



  










 