const express=require('express');
const {
    createController,
    getAllData
}=require('../controllers/customerController.js');
const router=express.Router();

//register || post
router.post("/create",createController);

// // DELETE request to delete a student record
// router.delete('/delete/:id', deleteController);

// // PUT request to edit/update a student record
// router.put('/edit/:id', editController);

 router.get('/alldata', getAllData);

// router.get('/search', getDataByRollNo);

// router.get('/:id', getDataById);

  
module.exports=router;