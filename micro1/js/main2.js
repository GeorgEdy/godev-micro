var button = document.getElementById('change');
button.addEventListener("click", function() {	
	var progress = document.getElementById('prog');
	progress.value= Math.floor(Math.random() * (100 - 0 + 1) + 0);
});
