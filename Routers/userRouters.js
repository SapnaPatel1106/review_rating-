const express = require('express')
const router = express.Router()

const user = require('../controllers/userController')
const auth = require('../middlewares/authMiddleware')
const { upload } = require('../middlewares/imageStorage')
const validation = require('../validation/users/user_validation')


router.post(
    '/register',
    upload.single("profilePic"),
    validation.registerUserValidation,
    user.signUpUser
);
router.post(
    '/loginUser',
    validation.loginUserValidation,
    user.userLogin
);
router.post(
    '/resetPasswordEmail',
    //auth.checkUserAuth, 
    user.resetPasswordEmail
);
router.post('/updatePassword/:id/:token', user.updatePassword)


module.exports = router;
