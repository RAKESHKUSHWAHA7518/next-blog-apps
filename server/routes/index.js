const express = require('express')

const router = express.Router()
const upload = require("../config/multer")
const  userSignUpController = require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
 
 
const createPost = require('../controller/createPost')
const getAllPost = require('../controller/getPost')
const getPostById = require('../controller/postbyID')
const getPostsByUserId = require('../controller/getPostbyUserID')


router.post("/signup", userSignUpController)
router.post("/login", userSignInController)
router.get('/user-details',authToken, userDetailsController)
router.get('/userLogout',userLogout)
router.post('/post', upload.single('image'), createPost);
router.get('/posts',getAllPost);
router.get('/getPostById/:id', getPostById)
router.get('/getPostsByUserId/:id',getPostsByUserId)
 



module.exports = router