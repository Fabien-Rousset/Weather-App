const apiKey = "79937de35840113f46750d7bb8a9171a";




 function renduMeteo(meteo){
   
    // recupere l'élèment "temperature"
    let temp = document.getElementById('temperature');
    // recupère les datas température de l'API et remplace le texte puis arroundi au nombre entier
    temp.innerHTML = `${Math.round(meteo.main.temp)}°`;

    let nomVille = document.getElementById("villeActuelle");
    nomVille.innerHTML = `${meteo.name}`;

    let tempMin = document.getElementById("temp-min");
    tempMin.innerHTML = `Min ${Math.round(meteo.main.temp_min)}°`;
    console.log(tempMin);

    let tempMax = document.getElementById('temp-max');
    tempMax.innerHTML = `&nbsp / Max ${Math.round(meteo.main.temp_max)}°`; 

    let monStockage = localStorage;
    
    let historique = monStockage.getItem("historique");

      if (historique === null) {
			historique = [];
		} else {
			historique = JSON.parse(historique);
		}

        historique.unshift(nomVille.innerHTML);
        monStockage.setItem("historique", JSON.stringify(historique));

  console.log(historique);

}


//--------------------------------------------------------------

let boutonFavoris = document.getElementById("bouton-favoris");
let cloneDiv = document.getElementById("position-actuelle");

function cloneUnderneath(){
    
}


boutonFavoris.addEventListener("mouseover", function(){this.style.backgroundColor = "orange"})
boutonFavoris.addEventListener("click", cloneUnderneath)

//----------------------------------------------------------------------//

 document.getElementById('appel_api').addEventListener("change", function(){

    const pays = "fr";
    const ville = document.getElementById("appel_api").value;
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+ville+","+pays+"&APPID="+apiKey+"&units=metric";

        fetch(url)
            .then(response => response.json())
            // console.log(response)
            .then((data) => {console.log(data);
                // console.log(data);
            renduMeteo(data)
                console.log(data.main.temp)

})});


// BOUTON FAVORIS

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





