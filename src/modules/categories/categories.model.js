const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

/**
 * Check if name is taken
 * @param {string} name
 * @param {ObjectId} [excludeCategoryId] - The id of the Category to be excluded
 * @returns {Promise<boolean>}
 */

CategorySchema.statics.isNameTaken = async function (name, excludeCategoryId) {
  const Category = await this.findOne({
    name,
    _id: { $ne: excludeCategoryId },
  });
  return !!Category;
};

/**
 * @typedef CategoryModel
 */

const CategoryModel = mongoose.model("Category", CategorySchema, "Category");
module.exports = CategoryModel;
