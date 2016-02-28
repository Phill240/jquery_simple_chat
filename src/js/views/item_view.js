define(['jquery'], function($){
    "use strict";


	function ItemView(message, region) {
		this.element = $(document.createElement('li'));
		this.replyButton = $('<button class="message__reply-button">Reply</button>')

		this.element
			.addClass('message')
			.append('<div class="message__text"></div>')
			.append(this.replyButton)
			.find('div')
			.html(message.text);

		region.append(this.element); 

		this.renderNested(message.nested);
		this.initEvents(message.nested);
	};

	ItemView.prototype.constructor = ItemView;

	ItemView.prototype.renderNested = function(nested) {
		require(['views/collection_view'], $.proxy(function(CollectionView) {
            new CollectionView({ messages: nested, region: this.element });
        }, this));
	};

	ItemView.prototype.initEvents = function(nested) {
		this.replyButton.click(function(){
			require(['controllers/new_controller'], function(NewController) {
        		NewController.start({ messages: nested });
        	})
        });
	};


	return ItemView;
});