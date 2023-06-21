const express = require("express");

const userRoute = require("../../modules/users/user.route");
const categoryRoute = require("../../modules/categories/categories.route");
const carRoute = require("../../modules/cars/cars.route");
const authRoute = require("../../modules/auth/auth.route");

const config = require("../../config/config");

const router = express.Router();

const defaultRoutes = [
  { path: "/user", route: userRoute },
  { path: "/category", route: categoryRoute },
  { path: "/car", route: carRoute },
  { path: "/auth", route: authRoute },
];

defaultRoutes.forEach((route) => router.use(route.path, route.route));

if (config.env === "development") {
  const devRoutes = [];
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
