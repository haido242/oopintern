const User = require("../models/User");
const userModel = new User();
const joi = require('joi')
class userController {

  async createUser(req, res) {

    try {
      const newUser = req.body;
      const schema = joi.object().keys({
        UserName: joi.string().required(),
        Password: joi.string().min(6).required(),
        Email: joi.string().email().required(),
        Gender: joi.string().required(),
        GroupId: joi.string().required(),
      })

      const data = schema.validate(newUser)
      if (data.error) {
        res.status(422).json(data.error)
      } else {
        await userModel.add(data.value);

        res.json(data)
      }
    } catch (err) {
      console.log(err);
      res.json("add user fail");
    }
  }
  async getUserList(req, res) {
    try {
      const data = await userModel.get();
      data.toArray().then((data) => res.json(data));
    } catch (err) {
      console.log(err);
      res.status(500).json("get list user is fail!");
    }
  }
  async deleteUser(req, res) {
    try {
      const id = req.params["id"];
      await userModel.del(id);
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
      await userModel.update(id, data);
      res.status(200).json("updated");
    } catch (err) {
      console.log(err);
      res.json("update fail!");
    }
  }
  async getUserByid(req, res) {
    try {
      const id = req.params["id"];
      const data = await userModel.getById(id);
      data.toArray().then((data) => res.json(data));
    } catch (err) {
      console.log(err);
      res.send(500, "get user fail");
    }
  }
  async searchUserName(req, res) {
    try {
      const searchValue = req.body.searchValue
      const data = await userModel.search(searchValue);
      data.toArray().then((data) => res.json(data));
    } catch (err) {
      console.log(err)
      res.status(500).json("search fail")
    }
  }
  async getAndPagination(req, res) {
    try {
      const pageNumber = req.params.page - 1
      const numberItemOfPage = req.body.itemOfPage
      const indexItem = pageNumber * numberItemOfPage
      const data = await userModel.get().skip(indexItem).limit(numberItemOfPage).sort('UserName')
      data.toArray().then((data) => {
        res.json(data)
      })
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  }
}

module.exports = userController;
