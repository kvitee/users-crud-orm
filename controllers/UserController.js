import { UserService } from "../services/UserService.js"


class UserController {
  static async create(req, res, next) {
    try {
      const userId = await UserService.create(req.body);

      res.status(201).json({ id: userId });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const users = await UserService.getAll();

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  static async get(req, res, next) {
    try {
      const user = await UserService.get(+req.params.userId);

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      await UserService.update(+req.params.userId, req.body);

      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await UserService.delete(+req.params.userId);

      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
};


export { UserController };
