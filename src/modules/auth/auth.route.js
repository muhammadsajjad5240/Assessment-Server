const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const validate = require("../../middleware/validate");
const authValidation = require("./auth.validation");
const authController = require("./auth.controller");

require("../../passport");

const router = express.Router({ mergeParams: true });

router.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
  })
);
router.use(passport.initialize());
router.use(passport.session());

router
  .post("/login", validate(authValidation.login), authController.login)
  .post("/logout", validate(authValidation.logout), authController.logout);

module.exports = router;
