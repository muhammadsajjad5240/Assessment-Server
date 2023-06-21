const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const CarModel = require("./cars.model");

const CarService = {};

/**
 * Create a Car
 * @param {Object} CarBody
 * @returns {Promise<CarModel>}
 */

CarService.create = async (CarBody) => {
  if (CarBody?.name && (await CarModel.isregistrationNoTaken(CarBody.name))) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Registration No already taken.`
    );
  }

  return CarModel.create(CarBody);
};

/**
 * Query for Cars
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

CarService.queryCars = async (filter, options) => {
  const result = CarModel.find(filter, {
    ...options,
  }).populate([{ path: "category", select: "name slug" }]);
  return result;
};

/**
 * Get Car by id
 * @returns {Promise<Car>}
 */

CarService.getCars = async () => {
  return CarModel.find({ deleted: false });
};

/**
 * Get Car by id
 * @param {ObjectId} id
 * @returns {Promise<CarModel>}
 */

CarService.getCarById = async (id) => {
  const car = await CarModel.findById(id);
  return car;
};

/**
 * Update Car by id
 * @param {ObjectId} CarId
 * @param {Object} updateBody
 * @returns {Promise<CarModel>}
 */

CarService.updateCarById = async (CarId, updateBody) => {
  const CarData = await CarService.getCarById(CarId);

  if (!CarData) {
    throw new ApiError(httpStatus.NOT_FOUND, "Car not found");
  }
  if (
    updateBody.email &&
    (await CarModel.isEmailTaken(updateBody.email, CarId))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }

  Object.assign(CarData, updateBody);
  await CarData.save();
  return CarData;
};

/**
 * Delete Car by id
 * @param {ObjectId} CarId
 * @returns {Promise<Car>}
 */

CarService.deleteCarById = async (CarId) => {
  try {
    const CarData = await CarModel.findByIdAndDelete(CarId);
    return CarData;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, "Car not found");
  }
};

module.exports = CarService;
