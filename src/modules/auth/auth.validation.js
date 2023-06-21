const Joi = require("joi");

const authValidation = {};

authValidation.login = {
  body: Joi.object()
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })
    .options({ stripUnknown: true }),
};

authValidation.logout = {
  body: Joi.object()
    .keys({
      refreshToken: Joi.string().required(),
      accessToken: Joi.string().required(),
    })
    .options({ stripUnknown: true }),
};

module.exports = authValidation;
