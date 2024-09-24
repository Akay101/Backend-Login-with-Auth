import express from 'express'
import userController from '../userController/userController.js'

const router = express.Router()


//public routes

router.post('/register', userController.userRegistration)
router.post('/login', userController.userLogin)
router.post('/forgotPass', userController.reset_pass_email)

//private routes
router.post('/logged', userController.userLogged)
router.post('/changePass', userController.changePassword)


export default router