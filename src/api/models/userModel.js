const mongoose = require('mongoose');
const {Schema} = mongoose;

let userSchema = new Schema({

});

module.exports = mongoose.model('User', userSchema);
