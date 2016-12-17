$(document).on("click", function (event) {
    var clickover = $(event.target);
    var barOpened = $("#myNavbar").hasClass("in");
    if (barOpened === true && !clickover.hasClass("navbar-toggle")) {
        $("#myNavbar").collapse('hide');
    }
});


var $contactForm = $('#contactform');
var $contactText = $('#contactText');

$contactForm.on("submit", function(event) {
	event.preventDefault();
	$.ajax({
		url: '//formspree.io/tali.shiatzu@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
      $contactForm.hide();
      $contactText.text("Thanks! Your message has been sent.")
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">There was an error, please try again later.</div>');
		}
	});
});
