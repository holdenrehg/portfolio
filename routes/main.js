/**
 * Non resourceful routes
 */
module.exports = function(app) {

	console.log(' -- generating main routes ... ');
	app.get('/', function(req, res) {
		res.render('index', { title: 'Holden Rehg' });
	});
};