define(function(){
	
	function EventObject() {
    	this._listeners = {};
	};

	EventObject.prototype.on = function (type, listener) {
        if (typeof this._listeners[type] == "undefined") {
            this._listeners[type] = [];
        }
        this._listeners[type].push(listener);
    };

    EventObject.prototype.fire = function (event, param) {
        if (this._listeners[event] instanceof Array) {
            var listeners = this._listeners[event];
            for (var i = 0, len = listeners.length; i < len; i++){
                listeners[i].call(this, param);
            }
        }
    };


    return EventObject;
});