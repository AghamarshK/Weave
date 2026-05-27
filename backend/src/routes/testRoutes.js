const express = require("express");

const router = express.Router();

const {
  getTestMessage,
  getError,
} = require("../controllers/testController");

router.get("/", getTestMessage);

router.get("/error", getError);

module.exports = router;