import { User } from "../models/User.js";
import { userRepository } from "../dataAccess/userRepository.js";

import { UserNotExistError } from "../exceptions/UserNotExist.js";
import { PropertyRequiredError } from "../exceptions/PropertyRequired.js";


class UserService {
  static async create({name, age}) {
    const user = new User();

    user.name = name;
    user.age = age;

    this.validateUser(user);

    await userRepository.save(user);

    return user.id;
  }

  static async getAll() {
    return await userRepository.find();
  }

  static async get(id) {
    const user = await userRepository.findOneBy({ id });

    if (user === null) {
      throw new UserNotExistError(id);
    }

    return user;
  }

  static async update(id, {name, age}) {
    const user = await this.get(id);

    user.name = name;
    user.age = age;

    this.validateUser(user);

    await userRepository.save(user);
  }

  static async delete(id) {
    await userRepository.remove(
      await this.get(id)
    );
  }

  static validateUser(user) {
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }

    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
  }
};


export { UserService };
