const mongoose = require("mongoose");

const CarSchema = mongoose.Schema(
  {
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    color: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    make: { type: String, required: true, trim: true },
    registrationNo: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

/**
 * Check if registrationNo is taken
 * @param {string} registrationNo
 * @param {ObjectId} [excludeCategoryId] - The id of the Category to be excluded
 * @returns {Promise<boolean>}
 */

CarSchema.statics.isregistrationNoTaken = async function (
  registrationNo,
  excludeCarId
) {
  const Car = await this.findOne({
    registrationNo,
    _id: { $ne: excludeCarId },
  });
  return !!Car;
};

/**
 * @typedef CarModel
 */

const CarModel = mongoose.model("Car", CarSchema, "Car");
module.exports = CarModel;
