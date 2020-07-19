$(document).ready(function ($) {

	// Активация карточки
	$(document).on('click', '.cards__item', function (event) {
		$(this).parents('.cards').find('.cards__item').removeClass('active');
		$(this).parents('.cards').find('.cards__item active').prop('active', false);
		$(this).toggleClass('active');
		return false;
	});
})
