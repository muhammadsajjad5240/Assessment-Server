const express = require("express");
const auth = require("../../middleware/auth");
const validate = require("../../middleware/validate");
const categoryValidation = require("./categories.validation");
const categoryController = require("./categories.controller");
const scopes = require("../../utils/scopes");

const router = express.Router();

router
  .route("/")
  .post(
    auth(),
    validate(categoryValidation.createCategory),
    categoryController.createCateogry
  )
  .get(
    auth(),
    validate(categoryValidation.getCategories),
    categoryController.findAllCategories
  );

router
  .route("/:id")
  .get(
    auth(),
    validate(categoryValidation.getCategory),
    categoryController.getCateogryById
  )
  .put(
    auth(),
    validate(categoryValidation.updateCategory),
    categoryController.updateCategoryById
  )
  .delete(
    auth(),
    validate(categoryValidation.deleteCategory),
    categoryController.deleteCategoryById
  );

module.exports = router;
