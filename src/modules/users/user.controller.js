const httpStatus = require("http-status");
const _ = require("lodash");
var randomize = require("randomatic");

const pick = require("../../utils/pick");
const ApiError = require("../../utils/ApiError");
const catchAsync = require("../../utils/catchAsync");
const { userService } = require("../../services");
const { sendConfirmationEmail } = require("../../services/email.service");

const userController = {};

userController.createUser = catchAsync(async (req, res) => {
  var userPassword = randomize("*", 8);
  req.body.password = userPassword;
  const user = await userService.createUser(req.body);
  await sendConfirmationEmail(user, userPassword);
  res.status(httpStatus.CREATED).send(user);
});

userController.findAllUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["email", "firstName", "lastName"]);

  // wildcard search on email, firstName, lastName

  const options = pick(req.query, ["sortBy", "limit", "page", "search"]);

  if (options?.search) {
    filter.$or = _.map(["email", "firstName", "lastName"], (item) => {
      return { [item]: { $regex: options?.search, $options: "i" } };
    });
  }

  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

userController.getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

userController.updateUserById = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

userController.deleteUserById = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send({ message: "User Deleted" });
});

module.exports = userController;
