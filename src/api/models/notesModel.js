const mongoose = require('mongoose');
const {Schema} = mongoose;

let notesSchema = new Schema({
      note: {
        type: Number,
        required:true,
      },
      message: {
        type: String,
        required: true,
      },
      etudiant_id: {
        type: String,
      },
      module_id: {
        type: String,
      },
      created_at : {
        type: Date,
        default: Date.now
      }
});

module.exports = mongoose.model('User', notesSchema);