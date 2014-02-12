/**
 * Created by David on 02/12/14.
 */

module.exports = function (app, db) {
    app.get('/login', login());
}

var login = function() {
    return function(req, res) {
        res.render('index.ejs', {
            title: 'Welcome'
        });
    };
};