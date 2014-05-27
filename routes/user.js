/*
 * GET users listing.
 */
module.exports = function(app) {
    app.get('/users', function(req, res) {
        res.send("respond with a resource");
    });
};
