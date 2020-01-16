const mongoose = require('mongoose');
const {Schema} = mongoose;

let userSchema = new Schema({
      prenom: {
        type: String,
        required: "Le prénom est requis"
      },
      nom: {
        type: String,
        required: "Le nom est requis"
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: Number,
        required: true
      },
      created_at : {
        type: Date,
        default: Date.now
      }
});

module.exports = mongoose.model('User', userSchema);
