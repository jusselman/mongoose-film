var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var filmSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
});

// Compile Schema into a modeal export it //
module.exports = mongoose.model('Film', filmSchema);

