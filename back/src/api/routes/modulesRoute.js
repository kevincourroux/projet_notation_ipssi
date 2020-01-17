module.exports = (app) => {
    const modulesController = require('../controllers/modulesController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');

    app.route('/modules/:user_id/:sessions_id')
    .get(jwtMiddleware.verify_token,modulesController.get_all_modules)
    .post(jwtMiddleware.verify_token,modulesController.create_a_modules)
    .put(jwtMiddleware.verify_token,modulesController.update_a_modules)
    .delete(jwtMiddleware.verify_token,modulesController.delete_a_modules);
  }
  