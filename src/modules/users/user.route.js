const express = require("express");
const auth = require("../../middleware/auth");
const validate = require("../../middleware/validate");
const userValidation = require("./user.validation");
const userController = require("./user.controller");

const router = express.Router();

router
  .route("/")
  .post(validate(userValidation.createUser), userController.createUser)
  .get(auth(), validate(userValidation.getUsers), userController.findAllUsers);

router
  .route("/:userId")
  .get(validate(userValidation.getUser), userController.getUserById)
  .put(
    auth(),
    validate(userValidation.updateUser),
    userController.updateUserById
  )
  .delete(
    auth(),
    validate(userValidation.deleteUser),
    userController.deleteUserById
  );

module.exports = router;
