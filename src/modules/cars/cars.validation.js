const Joi = require("joi");
const { objectId } = require("../../validations/custom.validation");

const carValidation = {};

carValidation.createCar = {
  body: Joi.object()
    .keys({
      category: Joi.string().custom(objectId),
      color: Joi.string().required(),
      model: Joi.string().required(),
      make: Joi.string().required(),
      registrationNo: Joi.string().required(),
    })
    .options({ stripUnknown: true }),
};

carValidation.getCars = {
  query: Joi.object()
    .keys({
      category: Joi.string().custom(objectId),
      color: Joi.string(),
      model: Joi.string(),
      make: Joi.string(),
      registrationNo: Joi.string(),
    })
    .options({ stripUnknown: true }),
};

carValidation.getCar = {
  params: Joi.object()
    .keys({
      id: Joi.string().custom(objectId),
    })
    .options({ stripUnknown: true }),
};

carValidation.updateCar = {
  params: Joi.object()
    .keys({
      id: Joi.string().custom(objectId),
    })
    .options({ stripUnknown: true }),
  body: Joi.object()
    .keys({
      category: Joi.string().custom(objectId),
      color: Joi.string().required(),
      model: Joi.string().required(),
      make: Joi.string().required(),
      registrationNo: Joi.string().required(),
    })
    .options({ stripUnknown: true }),
};

carValidation.deleteCar = {
  params: Joi.object()
    .keys({
      id: Joi.string().custom(objectId),
    })
    .options({ stripUnknown: true }),
};

module.exports = carValidation;
