const mongoose = require('mongoose');
const sessionsModel = require('../models/sessionsModel');
const Session = mongoose.model("Session");

exports.get_all_sessions = (req, res) => {
  Session.find({}, (error, posts) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(posts);
    }
  })
}

exports.create_a_session = (req, res) => {

  let new_session = new Session(req.body);

  new_session.save((error, post) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(post);
    }
  })
}


exports.update_a_session = (req, res) => {
  Session.findOneAndUpdate({}, req.body, {new: true}, (error, session) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(session);
    }
  })
}

exports.delete_a_session = (req, res) => {
  Session.remove({}, (error) => {
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