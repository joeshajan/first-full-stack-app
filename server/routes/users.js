const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users-controller');
const authToken = require('../middleware/authenticate-token');
const checkUserDetails = require('../middleware/checkUserDetails')
/* GET users listing. */

router.post('/signup', checkUserDetails, userControllers.signup);

router.post('/login',userControllers.login)

router.get('/get-all-users', userControllers.getAllUsers)

router.get('/get-user-by-email/:email', userControllers.getAllUsersByEmail)

router.get('/search-users-by-email/:email', userControllers.searchUsersByEmail)

router.get('/get-user-by-id/:id', userControllers.getUserById)

router.get('/get-user-details-from-token',authToken,userControllers.sendUserDetails)

router.put('/edit-user/:id',userControllers.editUser)

router.delete('/delete-user/:id',userControllers.deleteUser)

module.exports = router;
