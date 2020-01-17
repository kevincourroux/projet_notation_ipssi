module.exports = (app) => {
    const sessionsController = require('../controllers/sessionsController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');

    app.route('/sessions/')
    .get(sessionsController.get_all_sessions)
    .post(sessionsController.create_a_session)
    .put(jwtMiddleware.verify_token,sessionsController.update_a_session)
    .delete(jwtMiddleware.verify_token,sessionsController.delete_a_session);
  }
  