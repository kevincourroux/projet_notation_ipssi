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
      user_id: {
        type: String
      },
      start_at : {
        type: Date
      },
      end_at : {
        type: Date
      },
      created_at : {
        type: Date.now
      }
});

module.exports = mongoose.model('Modules', modulesSchema);
