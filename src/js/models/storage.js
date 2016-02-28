define(['data/initial'], function(InitialData){

	function load() {
		var data;
		
		try {
			data = JSON.parse(localStorage.getItem('messages'));
		} 
		finally {
			if ((typeof data === 'undefined') || !data) {
				data = InitialData;
			}
		}

		return data;
	};

	function save(data) {
		localStorage.setItem('messages', JSON.stringify(data));
	};


	return {
		load: load,
		save: save
	};

});