/**
 *      Retour à la page d'accueil depuis la barre de retour
 */
document.getElementById("barre-retour").addEventListener("click", () => {
	history.back();
	console.log("click");
});
