const express = require("express");
const {
  getLandingPage,
  getLoginPage,
  getSignupPage,
  get404Page,
} = require("./view.controller");

const router = express.Router({ mergeParams: true });

router.get("/", getLandingPage);
router.get("/login", getLoginPage);
router.get("/signup", getSignupPage);
router.get("/error", get404Page);

module.exports = router;
