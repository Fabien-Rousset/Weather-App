const apiKey = "79937de35840113f46750d7bb8a9171a";

let boutonFavoris = document.getElementById("bouton-favoris");
let cloneDiv = document.getElementById("position-actuelle");


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
    
    let historique = monStockage.getItem("historique",);

      if (historique === null) {
			historique = [];
		} else {
			historique = JSON.parse(historique);
		}

  //       historique.unshift(nomVille.innerHTML);
  //       monStockage.setItem("historique", JSON.stringify(historique));

  // console.log(historique);
  historique.push({
        ville: meteo.name,
        temperature: `${Math.round(meteo.main.temp)}°`,
        tempMin: `Min ${Math.round(meteo.main.temp_min)}°`,
        tempMax: `Max ${Math.round(meteo.main.temp_max)}°`
    });

    monStockage.setItem("historique", JSON.stringify(historique));
}

//--------------------------------------------------------------

function cloneUnderneath(e){
    let newDiv = document.createElement("div");
		let clonedDiv2 = cloneDiv.cloneNode(true);
		newDiv.appendChild(clonedDiv2);
		cloneDiv.parentNode.appendChild(newDiv);
    e.preventDefault(); 
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

// const cityJson = city.list.json


//     fetch(cityJson)
//         .then(response => response.json())
//         .then((data) => {console.log(data);
            
//         renduMeteo()
//         }
//         )







