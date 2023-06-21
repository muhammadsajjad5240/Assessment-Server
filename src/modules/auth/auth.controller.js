const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const { authService, tokenService } = require("../../services");

const authController = {};

authController.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

authController.logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken, req.body.accessToken);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = authController;
