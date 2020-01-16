const mongoose = require('mongoose');
const userModel = require('../models/userModel');
const User = mongoose.model("User");

exports.get_all_user = (req, res) => {
  User.find({}, (error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(user);
    }
  })
}

exports.create_a_user = (req, res) => {

  let new_user = new User(req.body);

  new_user.save((error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(user);
    }
  })
}


exports.update_a_user = (req, res) => {
  User.findOneAndUpdate({}, req.body, {new: true}, (error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(user);
    }
  })
}

exports.delete_a_user = (req, res) => {
  User.remove({}, (error) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json({message: "Session supprimé"});
    }
  })
}