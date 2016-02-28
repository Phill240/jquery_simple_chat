require(['jquery', 'models/storage', 'models/messages', 'controllers/list_controller', 'controllers/new_controller'], function($, Storage, Messages, ListController, NewController) {

	//var messages = new Messages;
	var messages = Messages.create(Storage.load());

	$(document).on("message:submited", function(){
		Storage.save(messages);
	});
	

	var messagesRegion = $('#messages-region');
	var formRegion = $('#form-region');

	ListController.start({ messages: messages, region: messagesRegion });

	if(messages.messages.length == 0) {
		NewController.start({ messages: messages });
	}

});