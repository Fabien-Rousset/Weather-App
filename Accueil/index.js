let accordion = document.getElementById("bouton");

 
	accordion.addEventListener("click", function () {
        console.log("prevision")
        let prevision = document.getElementById('prevision');
		prevision.classList.toggle("active");
        prevision.classList.toggle("noactive");
	});

