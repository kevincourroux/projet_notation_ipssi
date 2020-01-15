const mongoose = require('mongoose');
const {Schema} = mongoose;
let sessionsSchema = new Schema({
      promo: {
        type: String,
        required: "Le nom de la promotion"
      },
      annee: {
        type: Number,  min: 2000, max: 2050 
        required: "Annee"
      }
      created_at : {
        type: Date,
        default: Date.now
      }
});
module.exports = mongoose.model('Sessions', sessionsSchema);