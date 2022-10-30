const studentService = require("./course.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Users
 */
module.exports.getUsers = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await studentService.getUsers(filters);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Every Users
 */
module.exports.getEveryUsers = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await studentService.getEveryUsers(filters);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
 module.exports.getUserFromId = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.getUserFromId(userId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.addUser = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await studentService.addUser(body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.editUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.editUser(userId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Delete User
 */
module.exports.removeUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.removeUser(userId, req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
