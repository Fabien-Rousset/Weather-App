const apiKey = "79937de35840113f46750d7bb8a9171a";




 function renduMeteo(meteo){
   
  
    // let resultat = document.createElement("div");
    // resultat.textContent = meteo.main.temp;
    // document.getElementById("position-actuelle").append(resultat);
    // console.log(resultat);
    // console.log(meteo);

    let temp = document.getElementById('temperature');
    temp.innerHTML = `${Math.round(meteo.main.temp)}°`;

    let nomVille = document.getElementById("villeActuelle");
    nomVille.innerHTML = `${meteo.name}`;

    let tempMin = document.getElementById("temp-min");
    tempMin.innerHTML = `Min ${Math.round(meteo.main.temp_min)}°`;
    console.log(tempMin);

    let tempMax = document.getElementById('temp-max');
    tempMax.innerHTML = `&nbsp / Max ${Math.round(meteo.main.temp_max)}°`;




   
}

 document.getElementById('appel_api').addEventListener("change", function(){

    let pays = "fr";
    let ville = document.getElementById("appel_api").value;
    let url ="https://api.openweathermap.org/data/2.5/weather?q="+ville+","+pays+"&APPID="+apiKey+"&units=metric";

        fetch(url)
    .then(response => response.json())
    // console.log(response)
    .then((data) => {console.log(data);
        console.log(data);
        renduMeteo(data)
        console.log(data.main.temp)

}
)
}
);

// let reponseOk = function(data){

    
//     console.log(data)
//     alert(data.main.temp)
// }



// function coordonnees(pos) {
//     let crd = pos.coords;
  
//     let latitude = crd.latitude;
//     let longitude = crd.longitude;
// }

// let positionActuelle = navigator.geolocation.getCurrentPosition(coordonnees)
// console.log(positionActuelle)





