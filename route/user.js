const express = require('express');
const router = express.Router();
const {createUser,login,fetchUsers,fetchUser,deleteUser} = require('../controller/user');
const tokenAUth = require('../middleware/token-auth');
router.post('/users/v1.0',createUser);
router.post('/login/v1.0',login);
router.use(tokenAUth);
router.get('/users/v1.0',fetchUsers);
router.get('/users/v1.0/:id',fetchUser);
router.delete('/users/v1.0/:id',deleteUser);

module.exports = router