const apiKey = "79937de35840113f46750d7bb8a9171a";
let cloneDiv = document.getElementById("position-actuelle");
createFavoris();


function createFavoris() {
	let historiques = localStorage.getItem("historique");
	if(historiques == null)
		return false
	historiques = JSON.parse(historiques).reverse();
	let clonedDiv2 = cloneDiv.cloneNode(true);
	let favoris = document.getElementById("favoris");
	favoris.innerHTML = "";
	if(typeof historiques == 'undefined')
		return false
	historiques.forEach((element) => {
		let clone = cloneDiv.cloneNode(true);
		clone.style.display = "flex";
		clone.querySelector("#temperature").innerHTML = element.temperature;
		clone.querySelector("#villeActuelle").innerHTML = element.ville;
		clone.querySelector("#temp-min").innerHTML = element.tempMin;
		clone.querySelector("#temp-max").innerHTML = element.tempMax;
		favoris.appendChild(clone);
		// favoris.parentNode.appendChild(newDiv);
	});
	//
}

document.getElementById("appel_api").addEventListener("change", function () {
	const pays = "fr";
	const ville = document.getElementById("appel_api").value;
	const url =
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		ville +
		"," +
		pays +
		"&APPID=" +
		apiKey +
		"&units=metric";

	fetch(url)
		.then((response) => response.json())
		// console.log(response)
		.then((data) => {
			renduMeteo(data)
		});
});

function renduMeteo(meteo) {
	let reponse = document.getElementById("reponse");
	reponse.innerHTML = "";
	console.log("ici",meteo);
	if (meteo.cod == 404) {
 		return false;
	}
	
	 console.log("test");

	let clone = cloneDiv.cloneNode(true);
	clone.style.display = "flex";

	// recupère les datas température de l'API et remplace le texte puis arroundi au nombre entier
	clone.querySelector("#temperature").innerHTML = `${Math.round(meteo.main.temp)}°`;
	clone.querySelector("#villeActuelle").innerHTML = `${meteo.name}`;
	clone.querySelector("#temp-min").innerHTML = `Min ${Math.round(meteo.main.temp_min)}°`;
	clone.querySelector("#temp-max").innerHTML = `&nbsp / Max ${Math.round(meteo.main.temp_max)}°`;
	clone.querySelector("#bouton-favoris").addEventListener("click", function() {
		addToFavorite(meteo);
		createFavoris();
		clone.remove();
	})
	console.log("test",clone);
	reponse.appendChild(clone);

}

function addToFavorite(meteo) {
	let historique = localStorage.getItem("historique");
	if (historique === null) {
		historique = [];
	} else {
		historique = JSON.parse(historique);
	}
 
	historique.push({
		ville: meteo.name,
		temperature: `${Math.round(meteo.main.temp)}°`,
		tempMin: `Min ${Math.round(meteo.main.temp_min)}°`,
		tempMax: `Max ${Math.round(meteo.main.temp_max)}°`,
	});

	localStorage.setItem("historique", JSON.stringify(historique));
}


//----------------------------------------------------------------------//

// const cityJson = city.list.json

//     fetch(cityJson)
//         .then(response => response.json())
//         .then((data) => {console.log(data);

//         renduMeteo()
//         }
//         )
