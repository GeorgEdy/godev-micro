
var stars = getElementsByClassName('star');
var rating = getElementByClassId('rating');

for (var i=0; i< stars.length; i++) {
	var star = stars[i];
	star.addEventListener('mouseover', function() {
		var rating = this.getAttribute("data-value");
		theRating.value = rating;
		var length = parseInt(rating,10);

		for (var j=0;j<length;j++) {
			stars[j].classList.add('active');

		}
	});
	star.addEventlistener('mouseout', function(){
		for (var j=0; j<stars.length; j++){
			stars[j].classList.remove('active');
		});
	};
}