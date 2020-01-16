const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userModel = require('../models/userModel');
const User = mongoose.model('User');

exports.list_all_user = (req, res) => {
  Post.find({}, (error, posts) => {
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

exports.create_a_post = (req, res) => {
  let new_post = new Post(req.body);

  const randomTextPromise = textApiProvider.getRandomText();

  randomTextPromise.then(response => {
    if(!new_post.content){
      new_post.content = response;
    }
    new_post.save((error, post) => {
      if(error){
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."});
      }
      else {
        res.status(201);
        res.json(post);
      }
    });
  }, error => {
    console.log(error)
  })
}

exports.get_a_post = (req, res) => {
  Post.findById(req.params.post_id, (error, post) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(post);
    }
  })
}

exports.update_a_post = (req, res) => {
  Post.findOneAndUpdate({_id: req.params.post_id}, req.body, {new: true}, (error, post) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(post);
    }
  })
}

exports.delete_a_post = (req, res) => {
  Post.remove({_id: req.params.post_id}, (error) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json({message: "Article supprimé"});
    }
  })
}
exports.user_login = (req, res) => {
  var {body} = req;

  User.findOne({email: body.email}, (error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      if(user.email === body.email && user.password === body.password){
        jwt.sign({user}, config.secrets.jwt_key, {expiresIn: '30 days'}, (error, token) => {
          console.log(error);
          if(error){
            res.status(400);
            console.log(error);
            res.json({message: "Mot de passe ou email erroné."});
          }
          else{
            // res.json({token: token})
            res.json({token})
          }
        })
      }
    }
  })
}
