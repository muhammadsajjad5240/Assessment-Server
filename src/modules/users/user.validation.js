const Joi = require("joi");
const { objectId } = require("../../validations/custom.validation");

const userValidation = {};

userValidation.createUser = {
  body: Joi.object()
    .keys({
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      email: Joi.string().required().email(),
    })
    .options({ stripUnknown: true }),
};

userValidation.getUsers = {
  query: Joi.object()
    .keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string().email(),
    })
    .options({ stripUnknown: true }),
};

userValidation.getUser = {
  params: Joi.object()
    .keys({
      userId: Joi.string().custom(objectId),
    })
    .options({ stripUnknown: true }),
};

userValidation.updateUser = {
  body: Joi.object()
    .keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
    })
    .options({ stripUnknown: true }),
};

userValidation.deleteUser = {
  params: Joi.object()
    .keys({
      userId: Joi.string().custom(objectId),
    })
    .options({ stripUnknown: true }),
};

module.exports = userValidation;
