const route = require('express').Router();
const { userRegister, userLogin,userLogOut } = require('../controllers/UserController');
// middleware
const { authUser } = require('../middlewares/AuthUser');

// route.post('/register', userRegister);
route.post('/register',userRegister);
route.post('/login' ,userLogin);
route.post('/logout' ,userLogOut);

module.exports = route;