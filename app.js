let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	document.body.classList.toggle('lock');
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});