const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const { userListResponse } = require("./user.response");
const UserModel = require("./user.model");

const userService = {};

/**
 * Create a User
 * @param {Object} UserBody
 * @returns {Promise<UserModel>}
 */

userService.createUser = async (UserBody) => {
  if (UserBody?.email && (await UserModel.isEmailTaken(UserBody.email))) {
    throw new ApiError(httpStatus.BAD_REQUEST, `email: Email already taken.`);
  }

  return UserModel.create(UserBody);
};

/**
 * Query for Users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

userService.queryUsers = async (filter, options) => {
  const result = UserModel.paginate(filter, {
    ...options,
    select: userListResponse,
  });
  return result;
};

/**
 * Get User by id
 * @returns {Promise<User>}
 */

userService.getUsers = async () => {
  return UserModel.find({ deleted: false });
};

/**
 * Get User by id
 * @param {ObjectId} id
 * @returns {Promise<UserModel>}
 */

userService.getUserById = async (id) => {
  const user = await UserModel.findById(id).populate("avatarId");
  return user;
};

/**
 * Get User by email
 * @param {string} email
 * @returns {Promise<UserModel>}
 */

userService.getUserByEmail = async (email) => {
  const response = await UserModel.findOne({ email }).select("+password");
  return response;
};

/**
 * Get User by email
 * @param {string} phoneNumber
 * @returns {Promise<UserModel>}
 */

userService.getUserByPhoneNumber = async (phoneNumber) => {
  return UserModel.findOne({ phoneNumber, deleted: false });
};

/**
 * Update User by id
 * @param {ObjectId} UserId
 * @param {Object} updateBody
 * @returns {Promise<UserModel>}
 */

userService.updateUserById = async (UserId, updateBody) => {
  const UserData = await userService.getUserById(UserId);

  if (!UserData) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  if (
    updateBody.email &&
    (await UserModel.isEmailTaken(updateBody.email, UserId))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }

  Object.assign(UserData, updateBody);
  await UserData.save();
  return UserData;
};

/**
 * Delete User by id
 * @param {ObjectId} UserId
 * @returns {Promise<User>}
 */

userService.deleteUserById = async (UserId) => {
  const UserData = await userService.getUserById(UserId);
  if (!UserData) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await UserData.remove();
  return UserData;
};

module.exports = userService;
