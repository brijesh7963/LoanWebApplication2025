const customerModel = require("../models/customerModel.js");

const createController = async (req, res) => {
    try {
      const { name, email, income, creditscore, ammount ,status} = req.body;
      //validations
      if (!name) {
        return res.send({ error: "Name is Required" });
      }
      if (!email) {
        return res.send({ message: "email is Required" });
      }
      if (!income) {
        return res.send({ message: "income is Required" });
      }
      if (!creditscore) {
        return res.send({ message: "creditscore no is Required" });
      }
      if (!ammount) {
        return res.send({ message: "ammount is Required" });
      }
    
      //check user
      const exisitingUser = await customerModel.findOne({ email });
      //exisiting user
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "You Have Already applied for loan ",
        });
      }
      
      //save
      const user = await new customerModel({
        name,
        email,
        income,
        creditscore,
        ammount,
        status
      }).save();
  
      res.status(201).send({
        success: true,
        message: "Loan Apply Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Errro in Apply",
        error,
      });
    }
  };
  const getAllData = async (req, res) => {
      try {
          const allData = await customerModel.find();
          res.status(200).send({
              success: true,
              message: "All data retrieved successfully",
              data: allData,
          });
      } catch (error) {
          console.log(error);
          res.status(500).send({
              success: false,
              message: "Error in retrieving data",
              error: error.message,
          });
      }
  };
  module.exports = {
    createController,
    getAllData
  };