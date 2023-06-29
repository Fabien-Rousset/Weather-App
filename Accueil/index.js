let accordion = document.getElementById("bouton");

 
	accordion.addEventListener("click", function () {
        console.log("prevision")
        let prevision = document.getElementById('prevision');
		prevision.classList.toggle("active");
        prevision.classList.toggle("noactive");
	});




    let menuNuage = document.getElementById('menu-nuage');

    menuNuage.addEventListener('click', openWindow)

    function openWindow(){
        fenetre = window.open("/Random/random2.html", "_self");
    }

