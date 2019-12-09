const express = require("express");
const UserDb = require("./UsersModel.js");
const bcrypt = require("bcryptjs");

const UsersRouter = express.Router();

UsersRouter.get("/", (req, res) => {
  UserDb.find()
    .then(users => {
      res.status(200).json({ success: true, users });
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

UsersRouter.post("/register", (req, res) => {
  let user = req.body;
  let hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  if (user) {
    UserDb.insert(user)
      .then(saved => {
        res.status(201).json({ success: true, saved });
      })
      .catch(err => {
        res.status(500).json({ success: false, err });
      });
  } else {
    res.status(400).json({ success: false, message: "User is required" });
  }
});

UsersRouter.post("/login", (req, res) => {
  let { username, password } = req.body;

  UserDb.findBy({ username })
    .first()
    .then(userInfo => {
      if (userInfo && bcrypt.compareSync(password, userInfo.password)) {
        res.status(200).json({ success: true, message: `Welcome ${username}` });
      } else {
        res
          .status(401)
          .json({ success: false, message: "You shall not pass!" });
      }
    })
    .catch(err => res.status(500).json({ success: false, err }));
});

module.exports = UsersRouter;
