module.exports = (app) => {
    const notesController = require('../controllers/notesController');
  
    app.route('/note/')
    .get(notesController.get_all_note);

    app.route('/module/:module_id/note')
    .get(notesController.avg_of_note);

    app.route('/module/:module_id/etudiant_id/note')
    .post(notesController.create_of_note);
  }
  