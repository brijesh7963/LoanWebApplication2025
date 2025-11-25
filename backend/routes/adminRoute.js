const express=require('express');
// const {registerController,loginController,testController,forgotPasswordController}=require('../controllers/authController.js');
const {requireSignIn,isAdmin}=require('../middlewears/authMiddleware.js')
// const {loginController}=require('../controllers/adminController.js')
const customerModel = require("../models/customerModel.js");
const router=express.Router();

// //register || post
// router.post("/register",registerController);


// //LOGIN || POST
// router.post("/login", loginController);

// //Forgot Password || POST
// router.post("/forgot-password", forgotPasswordController);

//test routes
// router.post("/adminlogin",loginController);

router.put("/status/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await customerModel.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({
      success: true,
      message: "Status updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating status",
      error,
    });
  }
});

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
  
module.exports=router;