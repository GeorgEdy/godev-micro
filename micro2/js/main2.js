var stars = document.getElementsByClassName('star');
var rating = document.getElementById('rating');

for(var i =0; i <stars.length; i++) {
	var star = stars[i];

	star.addEventListener('mouseover', function(){
		var rating = this.getAttribute("data-value");
		theRating = document.getElementById('theRating');
		theRating.value = rating;
		var length = parseInt(rating, 10);

		for (var j=0; j<length; j++) {
			stars[j].classList.add('active');
		}
	});

	star.addEventListener('mouseout', function() {
		for (var j=0; j<stars.length; j++) {
			stars[j].classList.remove('active');
		}
	});

}