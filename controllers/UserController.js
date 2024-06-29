import { UserService } from "../services/UserService.js"


class UserController {
  static async create(req, res) {
    const userId = await UserService.create(req.body);

    res
      .status(201)
      .json({ id: userId });
  }

  static async getAll(req, res) {
    const users = await UserService.getAll();

    res
      .status(200)
      .json(users);
  }

  static async get(req, res) {
    const user = await UserService.get(+req.params.userId);

    res
      .status(200)
      .json(user);
  }

  static async update(req, res) {
    await UserService.update(+req.params.userId, req.body);

    res.status(204);
  }

  static async delete(req, res) {
    await UserService.delete(+req.params.userId);

    res.status(204);
  }
};


export { UserController };
