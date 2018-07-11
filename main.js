$(document).ready(function() {

	$('.header').on('click', function() {

		$('.words').removeClass('active')
		$(this).find(' + .words').addClass('active')

	})

})