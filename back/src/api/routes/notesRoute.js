module.exports = (app) => {
    const notesController = require('../controllers/notesController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');

    app.route('/note/')
    .get(notesController.get_all_note);

    app.route('/module/:module_id/note')
    .get(jwtMiddleware.verify_token,notesController.avg_of_note);

    app.route('/module/:module_id/etudiant_id/note')
    .post(jwtMiddleware.verify_token,notesController.create_a_note);
  }
  