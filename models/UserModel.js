import { dbClient } from "../dataAccess/dbClient.js"

import { UserNotExistError } from "../exceptions/UserNotExist.js";
import { PropertyRequiredError } from "../exceptions/PropertyRequired.js";


class UserModel {
  /**
   * Create new user.
   *
   * @param {string} name - Name of new user.
   * @param {number} age - Age of new user.
   * 
   * @return {Promise.<number>} Promise resolved with the id of created user.
   *
   * @throws {PropertyRequiredError} Both `name` and `age`
   *         properties must not be null-value.
   */
  static async create({name, age}) {
    if (!name) {
      throw new PropertyRequiredError("name");
    }

    if (!age) {
      throw new PropertyRequiredError("age");
    }

    const result = await dbClient.query(
      "INSERT INTO users (name, age) VALUES ($1, $2) RETURNING id;",
      [name, age]
    );

    return result.rows[0].id;
  }

  /**
   * Get all users.
   *
   * @return {Promise.<User[]>} Promise resolved with the list of users.
   */
  static async getAll() {
    const result = await dbClient.query(
      "SELECT * FROM users ORDER BY id;"
    );

    return result.rows;
  }

  /**
   * Get user by id.
   *
   * @param {number} id - Id of user to get.
   *
   * @return {Promise.<User>} Promise resolved with the user with the given id.
   *
   * @throws {UserNotExistError} Throws an error
   *         if user with the given id does not exist.
   */
  static async get(id) {
    const result = await dbClient.query(
      "SELECT * FROM users WHERE id = $1;",
      [id]
    );

    if (result.rows.length === 0) {
      throw new UserNotExistError(id);
    }

    return result.rows[0];
  }

  /**
   * Update user using the given data.
   * 
   * @param {number} id - Id of user to update.
   * @param {string} name - New name of user.
   * @param {number} age - New age of user.
   *
   * @return {Promise} Promise resolved if user was updated successfully.
   *
   * @throws {UserNotExistError} Throws an error
   *         if user with the given id does not exist.
   * @throws {PropertyRequiredError} Both `name` and `age`
   *         properties must not be null-value.
   */
  static async update(id, {name, age}) {
    if (!name) {
      throw new PropertyRequiredError("name");
    }

    if (!age) {
      throw new PropertyRequiredError("age");
    }

    const result = await dbClient.query(
      "UPDATE users SET name = $2, age = $3 WHERE id = $1;",
      [id, name, age]
    );

    if (result.rowCount === 0) {
      throw new UserNotExistError(id);
    }
  }

  /**
   * Delete user by id.
   *
   * @param {number} id - Id of user to delete.
   *
   * @return {Promise} Promise resolved if user was deleted successfully.
   *
   * @throws {UserNotExistError} Throws an error
   *         if user with the given id does not exist.
   */
  static async delete(id) {
    const result = await dbClient.query(
      "DELETE FROM users WHERE id = $1;",
      [id]
    );

    if (result.rowCount === 0) {
      throw new UserNotExistError(id);
    }
  }
}


export { UserModel };
