const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const CategoryModel = require("./categories.model");

const categoryService = {};

/**
 * Create a Category
 * @param {Object} CategoryBody
 * @returns {Promise<CategoryModel>}
 */

categoryService.create = async (CategoryBody) => {
  if (
    CategoryBody?.name &&
    (await CategoryModel.isNameTaken(CategoryBody.name))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, `Name already taken.`);
  }

  return CategoryModel.create(CategoryBody);
};

/**
 * Query for Categories
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

categoryService.queryCategories = async (filter, options) => {
  const result = CategoryModel.find(filter);
  return result;
};

categoryService.getRelatedData = async () => {
  const result = CategoryModel.find().select("name");
  return result;
};

/**
 * Get Category by id
 * @returns {Promise<Category>}
 */

categoryService.getCategories = async () => {
  return CategoryModel.find({ deleted: false });
};

/**
 * Get Category by id
 * @param {ObjectId} id
 * @returns {Promise<CategoryModel>}
 */

categoryService.getCategoryById = async (id) => {
  const category = await CategoryModel.findById(id);
  return category;
};

/**
 * Update Category by id
 * @param {ObjectId} CategoryId
 * @param {Object} updateBody
 * @returns {Promise<CategoryModel>}
 */

categoryService.updateCategoryById = async (CategoryId, updateBody) => {
  const CategoryData = await categoryService.getCategoryById(CategoryId);

  if (!CategoryData) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }

  Object.assign(CategoryData, updateBody);
  await CategoryData.save();
  return CategoryData;
};

/**
 * Delete Category by id
 * @param {ObjectId} CategoryId
 * @returns {Promise<Category>}
 */

categoryService.deleteCategoryById = async (CategoryId) => {
  try {
    const Category = await CategoryModel.findByIdAndDelete(CategoryId);
    return Category;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }
};

module.exports = categoryService;
