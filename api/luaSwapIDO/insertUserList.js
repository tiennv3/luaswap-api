const express = require('express');
const { now } = require('moment');
const router = express.Router()
const db = require('./db');
const UserList = db.userList;

router.post('/:user', ASYNC(async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.user;

  UserList.findOneAndUpdate({user: id}, {loginTime: Date.now()}, {new: true, upsert: true})
    .then(data => {
      res.send({ message: "userList was updated successfully." });
      // if (!data) {
      //   res.status(404).send({
      //     message: `Cannot update userList with id=${id}. Maybe userList was not found!`
      //   });
      // } else res.send({ message: "userList was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating userList with id=" + id
      });
    });
}))

module.exports = router
