var bars = document.getElementById('bars');
var nav = document.getElementById('myTopnav');
var arrow = document.getElementById('arrow');

function miniNav() {
	if (nav.className === 'navigation') {
		nav.className += ' responsive';
		bars.style.display = 'none';
		arrow.style.display = 'block';
	} else {
		nav.className = 'navigation';
		bars.style.display = 'block';
		arrow.style.display = 'none';
	}
}

bars.addEventListener('click', () => {
	miniNav();
}, false);


arrow.addEventListener('click', () => {
	miniNav();
}, false);


//Slides

var slideLeft = document.getElementById("slideLeft");
var slideRight = document.getElementById("slideRight");

slideLeft.addEventListener('click', () => {
	currentSlide(1);
}, false);

slideRight.addEventListener('click', () => {
	currentSlide(2);
}, false);


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
}
