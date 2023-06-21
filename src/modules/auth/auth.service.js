const httpStatus = require("http-status");
const userService = require("../users/user.service");
const Token = require("../../models/token.model");
const ApiError = require("../../utils/ApiError");
const authService = {};

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<SocialLoginModel>}
 */
authService.loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  }
  const data = user.toJSON();
  delete data.password;
  return data;
};

/**
 * Logout
 * @param {string} refreshToken
 * @returns {Promise}
 */
authService.logout = async (accessToken, refreshToken) => {
  await Token.findOneAndUpdate(
    { token: accessToken },
    { $set: { expires: new Date(), deleted: true, blacklisted: true } },
    { new: true }
  );
  await Token.findOneAndUpdate(
    { token: refreshToken },
    { $set: { expires: new Date(), deleted: true, blacklisted: true } },
    { new: true }
  );
};

module.exports = authService;
