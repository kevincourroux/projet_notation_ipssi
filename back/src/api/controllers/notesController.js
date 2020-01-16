const mongoose = require('mongoose');
const notesModel = require('../models/notesModel');
const Note = mongoose.model("Note");

exports.get_all_note = (req, res) => {

	let params_query = {
		etudiant_id: req.params.etudiant_id;
		module_id: req.params.module_id;
	}
  Note.find(params_query, (error, note) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(note);
    }
  })
}

exports.create_a_note = (req, res) => {

let data = {
	note: req.body.note,
	message : req.body.message,
	etudiant_id: req.params.etudiant_id,
	module_id: req.params.module_id
}	
  let new_note = new Note(data);

  new_note.save((error, note) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(note);
    }
  })
}

exports.avg_of_note = (req, res) => {

	Note.find({module_id: req.params.module_id}, (error, notes) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
  }
  else{  

	       var total = 0;
	       for(var i = 0; i < notes.length; i++) 
		        {
    		      total += notes[i].note;
		        }
	           var avg = total / notes.length;
  
      res.status(201);
      res.json(avg)
    }
  })

}











