const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');

require("dotenv").config();

// @route   GET api/users
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
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

    const { email, password } = req.body

    try {
        // See if user exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        user = new User({
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

// @route   DELETE api/user
// @desc    Delete user
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {// Remove user
      await User.findOneAndDelete({ _id: req.user.id });
      res.json({  msg: 'Account has been deleted succesfully' });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
})

// @route   Update api/users
// @desc    Update email
// @access  private
router.put(
  "/updateemail",
  [
    check("email", "Please include a valid email").isEmail(),
  ],
  auth, async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user.id });
      
      user.email = req.body.email;

      await User.findOneAndUpdate({ _id: req.user.id }, user);

      res.json({  msg: 'Email has been updated successfully' });
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   Update api/users
// @desc    Update password
// @access  private
router.put(
  "/updatepassword",
  [
    check(
      "newPassword",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  auth, async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user.id });

      const { oldPassword, password1 } = req.body;
      
      // Compare old passwords
      const isMatch = await bcrypt.compare(oldPassword, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Old password is incorrect" }] });
      }

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password1, salt);

      await User.findOneAndUpdate({ _id: req.user.id }, user);

      res.json({  msg: 'Password has been updated successfully' });
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;