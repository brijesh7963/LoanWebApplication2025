const express=require('express');
const {registerController,loginController,testController,forgotPasswordController}=require('../controllers/authController.js');
const {requireSignIn,isAdmin}=require('../middlewears/authMiddleware.js')
const router=express.Router();

//register || post
router.post("/register",registerController);


//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test",requireSignIn,isAdmin,testController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
  
module.exports=router;