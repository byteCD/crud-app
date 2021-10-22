const UserModel = require("../models/UserModel");
const validationService = require("../services/ValidationService");

class UserController {
  async getUsers(req, res, next) {
    try {
      const users = await UserModel.find({});

      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);

      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async addUser(req, res, next) {
    try {
      validationService.checkErrors(req);

      const { username, email, role } = req.body;
      const user = await UserModel.create({
        username,
        email,
        role,
      });

      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async editUser(req, res, next) {
    try {
      validationService.checkErrors(req);

      const { id } = req.params;
      const { username, email, role } = req.body;
      const user = await UserModel.findByIdAndUpdate(id, {
        username,
        email,
        role,
      });

      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const user = await UserModel.findByIdAndDelete(id);

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
