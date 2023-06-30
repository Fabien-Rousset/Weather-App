let accordion = document.getElementById("bouton");

 
	accordion.addEventListener("click", function () {
        console.log("prevision")
        let prevision = document.getElementById('prevision');
		prevision.classList.toggle("active");
        prevision.classList.toggle("noactive");
	});

/**
 *          Ouverture de la page Random depuis "menu nuage"
 *          de la page d'accueil
 */
    let menuNuage = document.getElementById('menu-nuage');

    menuNuage.addEventListener('click', openWindow)

    function openWindow(){
        fenetre = window.open("/Favoris/favoris2.html", "_self");
    }



/**
 *          Ouverture de la page Favoris depuis "menu tete"
 *          de la page d'accueil
*/
    let menuTete = document.getElementById("menu-tete");

		menuTete.addEventListener("click", openWindow);

		function openWindow() {
			fenetre = window.open("/Random/random2.html", "_self");
		}

