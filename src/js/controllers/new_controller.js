define(['jquery', 'views/new_view', 'models/message'], function($, NewView, Message){

	function start(options) {
		NewView.render();

		var messages = options.messages;
		var formRegion = $('#form-region');

		formRegion.find('button').click(function() {
			var text = formRegion.find('textarea').val()	
			messages.insertMessage({ text: text });		
			formRegion.find('textarea').val('');
			$(document).trigger("message:submited");	
		});
	}

	return {
		start: start
	};

});