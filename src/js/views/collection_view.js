define(['jquery', 'views/item_view'], function($, ItemView){
    "use strict";

	function CollectionView(options) {
		this.collection = options.messages;
		this.region = options.region;	

		this.list = $(document.createElement('ul'));
		this.list.addClass('messages');
		this.region.append(this.list);

		this.insertItems(this.collection.messages);
		this.initEvents();
	}

	CollectionView.prototype.constructor = CollectionView;

	CollectionView.prototype.insertItems = function(messages) {
		for (var i = 0, len = messages.length; i < len; i++) {
			new ItemView(messages[i], this.list);
		}
	}

	CollectionView.prototype.initEvents = function() {
		this.collection.on('inserted', $.proxy(function(message) {	
			new ItemView(message, this.list);
		}, this));
	}

	return CollectionView;
});