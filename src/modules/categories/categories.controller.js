const httpStatus = require("http-status");
const _ = require("lodash");
const pick = require("../../utils/pick");
const ApiError = require("../../utils/ApiError");
const catchAsync = require("../../utils/catchAsync");
const { categoryService } = require("../../services");

const categoryController = {};

const replaceSpace = (value) => {
  if (value) {
    value = value.toString();
    value = value.toLowerCase();
    return (value = value.replace(/ /g, "-"));
  }
};

categoryController.createCateogry = catchAsync(async (req, res) => {
  req.body.slug = replaceSpace(req.body.name);
  const category = await categoryService.create(req.body);
  res.status(httpStatus.CREATED).send(category);
});

categoryController.findAllCategories = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name"]);

  // wildcard search on name

  const options = pick(req.query, ["sortBy", "limit", "page", "search"]);

  if (options?.search) {
    filter.$or = _.map(["name"], (item) => {
      return { [item]: { $regex: options?.search, $options: "i" } };
    });
  }

  const result = await categoryService.queryCategories(filter, options);
  res.send(result);
});

categoryController.getCateogryById = catchAsync(async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.id);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }
  res.send(category);
});

categoryController.updateCategoryById = catchAsync(async (req, res) => {
  const category = await categoryService.updateCategoryById(
    req.params.id,
    req.body
  );
  res.send(category);
});

categoryController.deleteCategoryById = catchAsync(async (req, res) => {
  await categoryService.deleteCategoryById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send({ message: "Category Deleted" });
});

module.exports = categoryController;
