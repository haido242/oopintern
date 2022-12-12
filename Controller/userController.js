const User = require("../models/User");
const userModel = new User()
class userController {

  async createUser(req, res) {
    try {
      const newUser = req.body;
      await userModel.add(newUser)

      res.json("add user success");
    } catch (err) {
      console.log(err);
      res.json("add user fail");
    }
  }
  async getUserList(req, res) {
    try {
      const data = await userModel.get()
      data.toArray().then((data) => res.json(data))
    } catch (err) {
      console.log(err);
      res.json("get list user is fail!");
    }
  }
  async deleteUser(req, res) {
    try {
      const id = req.params["id"];
      await userModel.del(id)
      res.status(200).json("delete success");
    } catch (err) {
      console.log(err);
      res.status(500).json("delete fail!");
    }
  }
  async updateUser(req, res) {
    try {
      const id = req.params["id"];
      const data = req.body;
      await userModel.update(id, data)
      res.status(200).json("updated");
    } catch (err) {
      console.log(err);
      res.json("update fail!");
    }
  }
  async getUserByid(req, res){}
}

module.exports = userController;
