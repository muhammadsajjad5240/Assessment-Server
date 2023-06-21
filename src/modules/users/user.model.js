const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      private: true, // used by the toJSON plugin
      select: false,
    },
  },
  { timestamps: true }
);

/**
 * Check if email is taken
 * @param {string} email - The User's email
 * @param {ObjectId} [excludeUserId] - The id of the User to be excluded
 * @returns {Promise<boolean>}
 */

UserSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const User = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!User;
};

/**
 * Check if password matches the User's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */

UserSchema.methods.isPasswordMatch = async function (password) {
  const User = this;
  return bcrypt.compare(password, User.password);
};

UserSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 8);
  }
  next();
});

/**
 * @typedef UserModel
 */

const UserModel = mongoose.model("User", UserSchema, "users");
module.exports = UserModel;
