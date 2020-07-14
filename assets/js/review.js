$(document).ready(function() {
	(function($) {
		var $stars = $('.rating .star');
		
		$stars.each(function() {
			var $this = $(this);
			var rating = $this.data('rating');
			
			$this.on('click', function(e) {
				e.preventDefault();
				
				// Prevent from selecting multiple times, or in our case
				// running an ajax request more than once for the same
				// value
				if($this.hasClass('selected')) {
					// alert('you\'ve already selected this, but thanks for trying again!');
					return false;
				}
				
				
				$stars.removeClass('selected');
				$this.addClass('selected');
				
				// ADD AN AJAX CALL HERE!
				// $.ajax(...);
				
				// This is only a test so you can see it working
				// alert('You selected a star rating of: ' + rating);
				
			});
		});
		
	})(jQuery);
});