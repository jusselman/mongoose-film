var Film = require('../models/film');

module.exports = {
    new: newFilm,
    create,
    index
};

function index(req, res) {
    Film.find({}, function(err, films) {
        res.render('films/index', {films});
    });
}

function create(req, res) {
    // convert nowShowing's checkbox of unchecked to checked, or on //
    req.body.nowShowing = req.body.nowShowing === 'on';
    // remove white space next to commas //
    req.body.cast = req.body.cast.replace(/\s*,\s/g, ',');
    // split 'em if they're not an empty string //
    if (req.body.cast) req.body.cast = req.body.cast.split(',');
    // remove empty properties //
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    var film = new Film(req.body);
    film.save(function(err) {
        // one means of handling errors //
        if (err) return res.render('films/new');
        console.log(film);
        // redirect back to new.ejs if error occurs //
        res.redirect('/films/new');
    });

}

function newFilm(req, res) {
    res.render('films/new');
}