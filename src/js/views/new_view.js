define(['jquery'], function($) {
	var formRegion = $('#form-region');

	function render() {
		formRegion.html('<div class="form"><textarea class="form__textarea"></textarea><button class="form__submit">Submit</button></div>');
		formRegion.slideDown();
		formRegion.find('button').click(function() {
			formRegion.slideUp();
		});
	}

	return {
		render: render
	}

});