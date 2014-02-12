
var path = require('path');

module.exports = function (app) {

    var fs = require('fs');
    var arrFitxers = fs.readdirSync('pages');

    for(i=0;i< arrFitxers.length ; i++){
        console.log(arrFitxers[i]); // arxius de pagines detectats
        require(path.join(__dirname, '../pages') + "\\" + arrFitxers[i])(app);
    }
    //app.get('/', index());
};

var index = function(){
    return function(req, res) {
        res.render('index', {
            title: 'Application ,'
        });
    };
};