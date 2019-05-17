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

bars.addEventListener(
	'click',
	() => {
		miniNav();
	},
	false
);

arrow.addEventListener(
	'click',
	() => {
		miniNav();
	},
	false
);

//Slides Services

var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = ['mySlides1', 'mySlides2', 'mySlides3', 'mySlides4', 'mySlides5', 'mySlides6', 'mySlides7', 'mySlides8', 'mySlides9'];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);

function plusSlides(n, no) {
	showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
	var i;
	var x = document.getElementsByClassName(slideId[no]);
	if (n > x.length) {
		slideIndex[no] = 1;
	}
	if (n < 1) {
		slideIndex[no] = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	x[slideIndex[no] - 1].style.display = 'block';
}


//Slides Gallery

var slideGalIndex = 1;
showGalSlides(slideGalIndex);

function plusGalSlides(n) {
	showGalSlides(slideGalIndex += n);
}

function currentSlide(n) {
	showGalSlides(slideGalIndex = n);
}

function showGalSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {
		slideGalIndex = 1
	}
	if (n < 1) {
		slideGalIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideGalIndex - 1].style.display = "block";
	dots[slideGalIndex - 1].className += " active";
	captionText.innerHTML = dots[slideGalIndex - 1].alt;
}



//logo shrink

var home = document.getElementById('services');
var sticky = home.offsetTop;
var logo = document.getElementById('logoId');

window.onscroll = function () {
	if (window.innerWidth > 800) {
		myFunction();
	}
};

window.onresize = function () {
	toggle();
};

function myFunction() {
	if (window.pageYOffset > sticky - 250 || window.innerWidth < 800) {
		logo.style.width = '60px';
		logo.style.top = '0';
	} else {
		logo.style.width = '150px';
		logo.style.top = '10px';
	}
}

function toggle() {
	if (window.innerWidth < 800) {
		logo.style.width = '60px';
		logo.style.top = '0';
	}
	if (window.innerWidth < 600) {
		logo.style.width = '45px';
		logo.style.top = '0';
	}
	if (window.innerWidth > 800) {
		logo.style.width = '150px';
		logo.style.top = '10px';
	}
}
