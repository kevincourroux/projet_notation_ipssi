module.exports = (app) => {
    const sessionsController = require('../controllers/sessionsController');
  
    app.route('/sessions/')
    .get(sessionsController.get_all_sessions)
    .post(sessionsController.create_a_session)
    .put(sessionsController.update_a_session)
    .delete(sessionsController.delete_a_session);
  }
  