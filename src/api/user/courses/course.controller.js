const studentService = require("./course.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Course
 */
module.exports.getCourse = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await studentService.getCourse(filters);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Every Course
 */
module.exports.getEveryCourse = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await studentService.getEveryCourse(filters);
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
 module.exports.getCourseFromId = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.getCourseFromId(userId);
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
module.exports.addCourse = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await studentService.addCourse(body);
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
module.exports.editCourse = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.editCourse(userId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Delete Course
 */
module.exports.removeCourse = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.removeCourse(userId, req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
