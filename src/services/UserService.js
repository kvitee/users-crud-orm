import { UserModel } from "../models/UserModel.js";


class UserService {
  static async create({name, age}) {
    return await UserModel.create({ name, age });
  }

  static async getAll() {
    return await UserModel.getAll();
  }

  static async get(id) {
    return await UserModel.get(id);
  }

  static async update(id, {name, age}) {
    return await UserModel.update(id, { name, age });
  }

  static async delete(id) {
    return await UserModel.delete(id);
  }
};


export { UserService };
