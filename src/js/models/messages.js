define(['concerns/event_object', 'models/message'], function(EventObject, Message){	
    "use strict";

	function Messages() {
        EventObject.call(this);
		this.messages = [];
	};

	Messages.create = function(array) {
		var result = new Messages;
        result.insertMessages(array.messages);
		return result;
	};

	Messages.prototype = Object.create(EventObject.prototype);
    var _super_ = EventObject.prototype;

    Messages.prototype.insertMessages = function (array) {
        for (var i = 0, len = array.length; i < len; i++) {   
            this.messages.push(this.createMessage(array[i]));
        }        
    };

	Messages.prototype.insertMessage = function (object) {  
        var message = this.createMessage(object);      
        this.messages.push(message);
        this.fire('inserted', message);
	};

    Messages.prototype.createMessage = function (object) {
        if(typeof object.nested !== "object") {
            object.nested = { messages: [] };
        }
        object.nested = Messages.create(object.nested);
        var message = Message.create(object);

        return message
    };
	
	return Messages;
});