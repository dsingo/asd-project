const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const Card = require("../../models/Card");

require("dotenv").config();

// @route POST api/card/add
// @desc Add new card to user
// @access Public
router.post(
    "/add"
)