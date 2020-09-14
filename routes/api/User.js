const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

require("dotenv").config();

// @route   GET api/users
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { name, email, password } = req.body

    try {
        // See if user exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        user = new User({
            name,
            email,
            password
        })

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Return json webtoken
        const payload = { 
            user: {
                id: user.id
            }
        }
        
        jwt.sign(
            payload, 
            process.env.jwtSecret, 
            { expiresIn: 360000 }, 
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
  }
);

module.exports = router;
