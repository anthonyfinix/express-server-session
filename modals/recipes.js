const mongoose = require('mongoose');

recipeSchema = new mongoose.Schema({
    youtubeId: String,
    addedOn: Date
})

module.exports = mongoose.model('Recipe',recipeSchema);