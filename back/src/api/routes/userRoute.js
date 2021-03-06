module.exports = (app) => {
    const userController = require('../controllers/userController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');

    app.route('/user/')
    .get(userController.get_all_user)
    .post(userController.create_a_user)
    .put(userController.update_a_user)
    .delete(userController.delete_a_user);
  }
  