/*
 * GET users listing.
 */

module.exports = function(app) {

	console.log(' -- generating user routes ... ');
	app.get('/users', function(req, res) {
		res.send("respond with a resource");
	});
};