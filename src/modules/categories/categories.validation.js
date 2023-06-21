const Joi = require("joi");
const { objectId } = require("../../validations/custom.validation");

const categoryValidation = {};

categoryValidation.createCategory = {
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .options({ stripUnknown: true }),
};

categoryValidation.getCategories = {
  query: Joi.object()
    .keys({
      name: Joi.string().email(),
      search: Joi.string(),
      sortBy: Joi.string(),
      limit: Joi.number().integer(),
      page: Joi.number().integer(),
    })
    .options({ stripUnknown: true }),
};

categoryValidation.getCategory = {
  params: Joi.object()
    .keys({
      id: Joi.string().custom(objectId),
    })
    .options({ stripUnknown: true }),
};

categoryValidation.updateCategory = {
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .options({ stripUnknown: true }),
};

categoryValidation.deleteCategory = {
  params: Joi.object()
    .keys({
      id: Joi.string().custom(objectId),
    })
    .options({ stripUnknown: true }),
};

module.exports = categoryValidation;
