
 document.addEventListener("DOMContentLoaded", function(event) {
	var carousels = bulmaCarousel.attach();

	  // Get all "navbar-burger" elements
		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

		// Check if there are any navbar burgers
		if ($navbarBurgers.length > 0) {
	
			// Add a click event on each of them
			$navbarBurgers.forEach( el => {
				el.addEventListener('click', () => {
	
					// Get the target from the "data-target" attribute
					const target = el.dataset.target;
					const $target = document.getElementById(target);
	
					// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
					el.classList.toggle('is-active');
					$target.classList.toggle('is-active');
	
				});
			});
		}

		$(window).scroll(function(){
			if ($('.navbar').offset().top > 50) {
				$('.is-fixed-top').addClass('colapsar-nav');
			}else{
				$('.is-fixed-top').removeClass('colapsar-nav');
			}
		});
		
		$(document).ready(function(){
			// Add smooth scrolling to all links
			$('.navbar-item, .navbar-brand').bind('click', function(event) {
			
				// Make sure this.hash has a value before overriding default behavior
				if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
			
				// Store hash
				var hash = this.hash;
			
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 100, function(){
			
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
				} // End if
			});
			});
});



