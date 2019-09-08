var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var filmSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear();
        },
        min: 1927
    },
    mpaaRating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R']
    },
    cast: [String],
    nowShowing: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})
// Compile Schema into a modeal export it //
module.exports = mongoose.model('Film', filmSchema);

