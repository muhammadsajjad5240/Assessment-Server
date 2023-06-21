const httpStatus = require("http-status");
const _ = require("lodash");
const pick = require("../../utils/pick");
const ApiError = require("../../utils/ApiError");
const catchAsync = require("../../utils/catchAsync");
const { carService, categoryService } = require("../../services");

const carController = {};

carController.createCar = catchAsync(async (req, res) => {
  const car = await carService.create(req.body);
  res.status(httpStatus.CREATED).send(car);
});

carController.findAllCars = catchAsync(async (req, res) => {
  const filter = pick(req.query, [
    "category",
    "color",
    "model",
    "make",
    "registrationNo",
  ]);

  // wildcard search on name

  const options = pick(req.query, ["sortBy", "limit", "page"]);

  const result = await carService.queryCars(filter, options);
  res.send(result);
});

carController.getRelatedData = catchAsync(async (req, res) => {
  const result = await categoryService.getRelatedData();
  res.send(result);
});

carController.getCarById = catchAsync(async (req, res) => {
  console.log("req.params", req.params);
  const car = await carService.getCarById(req.params.id);
  if (!car) {
    throw new ApiError(httpStatus.NOT_FOUND, "Car not found");
  }
  res.send(car);
});

carController.updateCaryById = catchAsync(async (req, res) => {
  const car = await carService.updateCarById(req.params.id, req.body);
  res.send(car);
});

carController.deleteCarById = catchAsync(async (req, res) => {
  await carService.deleteCarById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send({ message: "Car Deleted" });
});

module.exports = carController;
