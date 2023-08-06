const {
  getAll,
  create,
  getOne,
  remove,
  update,
  verifyUser,
  login,
  logged,
  resetPassword,
  updatePassword,
} = require("../controllers/user.controller");
const express = require("express");
const { verifyJwt } = require("../utils/verity");
const routerUser = express.Router();

routerUser.route("/").get(getAll).post(create);
routerUser.route("/login").post(login);
routerUser.route("/me").get(verifyJwt, logged);
routerUser.route("/reset_password").post(resetPassword);

routerUser.route("/reset_password/:code").post(updatePassword);

routerUser.route("/verify/:code").get(verifyUser);

routerUser.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerUser;
