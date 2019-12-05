const express = require("express");
const UserDb = require("./UsersModel.js");
const bcrypt = require("bcryptjs");

const UsersRouter = express.Router();

UsersRouter.get("/", (req, res) => {
  const user = req.header;

  UserDb.find()
    .then(users => {
      if (username && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ success: true, users });
      } else {
        res
          .status(400)
          .json({ success: false, message: "You shall not pass!" });
      }
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

module.exports = UsersRouter;
