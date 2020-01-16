module.exports = (app) => {
    const modulesController = require('../controllers/modulesController');
  
    app.route('/modules/:user_id/:sessions_id')
    .get(modulesController.get_all_modules)
    .post(modulesController.create_a_modules)
    .put(modulesController.update_a_modules)
    .delete(modulesController.delete_a_modules);
  }
  