#(document).ready(function() {

	$('#content ul li:first-child').addClass('active')
	$('#content section:first-child').show()

	$('#content ul li a').on('click', function() {
		var id = $(this).attr('href') // gives the section id based on what we clicked 

		$('#content ul li a').removeClass('active') // Make sure other elements are not active
		$(this).addClass('active') // Make sure current link is the only active one

		$('#content section').slideUp() // Do this when hiding
		$(id).slideDown() // Do this when showing
	})

})