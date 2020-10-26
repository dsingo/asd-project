const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Card = require("../../models/Card");
const auth = require("../../middleware/auth");
const assert = require("assert");
const { v4: uuidv4 } = require("uuid");
const ObjectId = require("mongoose").Types.ObjectId;

require("dotenv").config();

// GET CARDS FOR AUTHENTICATED USER
router.get("/", auth, async (req, res) => {
  Card.find({ user: req.user.id })
    .then((cards) => res.status(200).json(cards))
    .catch((err) => res.status(501).json(err.message));
});

// GET CARD BY ID
// @param cardid - uuid of card
router.get("/:cardid", auth, async (req, res) => {
  Card.findOne({ id: req.params.cardid })
    .then((card) => {
      if (card.user !== req.user.id) {
        res.status(200).json(card);
      } else {
        res.status(403);
      }
    })
    .catch((err) => res.status(501).json(err.message));
});

// DELETE CARD BY ID
// @param cardid - uuid of card
router.delete("/delete", auth, async (req, res) => {
  console.log("yes");
});

// PUT - UPDATE NICKNAME
// @param cardid - uuid of card
// @body {
//  name: String - new nickname
// }
router.put("/:cardid", auth, async (req, res) => {
  Card.findOneAndUpdate(
    { id: req.params.cardid },
    { name: req.body.name },
    {
      new: true,
    }
  )
    .then((card) => res.status(200).json(card))
    .catch((err) => res.status(501).json(err.message));
});

// PUT - UPDATE BALANCE
// @param cardid - uuid of card
// @body {
//  amount: number - amount you want to top up the card by
// }
router.put("/topup", auth, async (req, res) => {
  try {
    console.log("yes")
    // const card = await Card.findOne({ id: req.cardid });
    // card.balance += req.body.amount;
    // await card.save();
    // res.status(200).json(card);
  } catch (err) {
    res.status(501).json(err.message);
  }
});

// POST - CREATE CARD
router.post("/", auth, async (req, res) => {
  try {
    const data = req.body;

    const type = data.type;

    const name = data.nickname;

    assert(
      ["Adult", "Concession", "Child"].includes(type),
      "Invalid card type"
    );

    const cardId = uuidv4();
    const card = new Card({
      id: cardId,
      user: req.user.id,
      name,
      type,
    });

    card.save().catch((err) =>
      res.status(401).json({
        msg: `An error occurred while trying to create your card, ${err.message}`,
      })
    );

    res.status(200).json({ id: cardId });
  } catch (e) {
    res
      .status(401)
      .json({
        msg: `An error occurred while trying to create your card, ${e.message}`,
      });
  }
});

module.exports = router;
