define(['jquery'], function($){	
    "use strict";

	function Message(text){
		this.text = text;
	}

	Message.create = function(options) {
		var result = new Message(options.text);
		result.setNested(options.nested);
		return result;
	}

	Message.prototype.constructor = Message;

	Message.prototype.setNested = function(nested) {
		this.nested = nested;
	}

	return Message;
});