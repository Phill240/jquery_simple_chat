define(['views/collection_view'], function(CollectionView){

	function start(options) {		
		var messages = options.messages;
		var messagesRegion = options.region;
		var collection = new CollectionView({ messages: messages, region: messagesRegion });
	}

	return {
		start: start
	}

});