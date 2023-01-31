const User = require("../models/User");
const userModel = new User();
const joi = require("joi");
const { use } = require("../router");
const e = require("express");
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
        CreateAt: joi.date().required(),
      });

      const data = schema.validate(newUser);
      if (data.error) {
        res.status(422).json(data.error);
      } else {
        await userModel.add(data.value);

        res.json(data);
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
  // async searchUserName(req, res) {
  //   try {
  //     let searchValue = req.params.searchValue;
  //     console.log(searchValue)
  //     const data = await userModel.search(searchValue);
  //     data.toArray().then((data) => res.json(data));
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json("search fail");
  //   }
  // }
  async search(req, res) {
    try {
      const { field, value } = req.query
      const data = await userModel.search(field, value)
      data.toArray().then((data) => {
        res.json(data)
      })
    } catch (e) {
      console.log(e)
      res.send('search fail')
    }
  }
  async getAndPagination(req, res) {
    try {
      const { page, limit, sort, filter, field } = req.query;
      const indexItem = (page - 1) * limit;
      const filterQuery = { [field]: filter };
      let sortQuery = "";
      sort?.charAt(0) == "-"
        ? (sortQuery = { [sort.replace("-", "")]: -1 })
        : (sortQuery = { [sort]: 1 });
      let query = userModel.query().find(filterQuery).skip(indexItem).limit(parseInt(limit))
      if (sort) {
        query = query.sort(sortQuery)
      }
      const total = await userModel.query().find(filterQuery).count()
      const data = await query
      data.toArray().then((data) => {

        res.json({
          page: page,
          limit: limit,
          total: total,
          data: data
        });
      });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  }
  async findByDate(req, res) {
    try {
      const dateStart = new Date(Number(req.query.dateStart));
      const dateEnd = new Date(Number(req.query.dateEnd));
      // console.log(dateStart, dateEnd, req.query.dateStart);
      const total = await userModel.count()
      const data = await userModel
        .query()
        .find({ CreateAt: { $gte: dateStart, $lt: dateEnd } }).sort({ CreateAt: -1 });
      data.toArray().then((data) => {
        res.json({ count: data.length, data: data, total: total });
      });
    } catch (error) {
      console.log(error);
      res.json("err");
    }
  }
  async test(req, res) {
    try {
      const params = req.query
      let query = {}
      let queryGroupId = []
      if(params.GroupId){
        params.GroupId.forEach(element => {
          queryGroupId.push({GroupId : element})
        });

      }

      if(params.Gender){
        query = {Gender : params.Gender}
      }
      
      console.log(query, queryGroupId)
      const data = await userModel.query().find({$and: [{$or: queryGroupId}, query]})
      data.toArray().then((data) => {
        res.json(data)
      })
    } catch (e) {
      console.log(e)
      res.send(e)
    }
  }
}

module.exports = userController;