$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		//- Есле lock-скрола нужен, то в css + body.lock{overflow:hidden;}
		$('body').toggleClass('lock');
	});
	$('.menu__items').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});