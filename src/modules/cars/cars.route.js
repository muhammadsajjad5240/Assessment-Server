const express = require("express");
const auth = require("../../middleware/auth");
const validate = require("../../middleware/validate");
const carValidation = require("./cars.validation");
const carController = require("./cars.controller");

const router = express.Router();
router.route("/related/").get(carController.getRelatedData);

router
  .route("/")
  .post(auth(), validate(carValidation.createCar), carController.createCar)
  .get(auth(), validate(carValidation.getCars), carController.findAllCars);

router
  .route("/:id")
  .get(validate(carValidation.getCar), carController.getCarById)
  .put(auth(), validate(carValidation.updateCar), carController.updateCaryById)
  .delete(
    auth(),
    validate(carValidation.deleteCar),
    carController.deleteCarById
  );

module.exports = router;
