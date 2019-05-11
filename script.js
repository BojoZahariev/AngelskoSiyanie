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
