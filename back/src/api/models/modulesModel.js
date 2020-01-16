const mongoose = require('mongoose');
const {Schema} = mongoose;

let modulesSchema = new Schema({
      name: {
        type: String,
        required: "Le name est requis"
      },
      sessions_id: {
        type: String
      },
      intervenants_id: {
        type: String
      },
      created_at : {
        type: Date
      },
      end_at : {
        type: Date
      }
});

module.exports = mongoose.model('Modules', modulesSchema);
