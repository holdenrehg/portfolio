(function() {

	/**
	 * Convert NodeList object to array
	 */
    NodeList.prototype.toArray = function() {
        return [].map.call(this, function(element) {
            return element;
        });
    };

})();
