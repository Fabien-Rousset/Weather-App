const apiKey = "79937de35840113f46750d7bb8a9171a";
const url ="https://api.openweathermap.org/data/2.5/weather?q=dijon,fr&APPID=79937de35840113f46750d7bb8a9171a";



fetch("https://api.openweathermap.org/data/2.5/weather?q=dijon,fr&APPID=79937de35840113f46750d7bb8a9171a")
.then(response => response.json())
// console.log(response)
.then((data) => {console.log(data);
    console.log(data.name);
    function renduMeteo(meteo){
    let resultsContainer = document.getElementById("result-weather");
  
    let ville = document.createElement('h2');
    ville.textContent = meteo.name;
    console.log(meteo.name);
    resultsContainer.append(ville);
    // console.log(ville);
};
renduMeteo(data)

}

);





