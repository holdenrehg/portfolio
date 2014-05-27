/**
 * Non resourceful routes
 */
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', { title: 'Holden Rehg' });
	});
};