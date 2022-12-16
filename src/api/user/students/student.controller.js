const studentService = require("./student.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Student
 */
module.exports.getStudent = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await studentService.getStudent(filters);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Every Student
 */
module.exports.getEveryStudent = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await studentService.getEveryStudent(filters);
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
 module.exports.getStudentFromId = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.getStudentFromId(userId);
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
module.exports.addStudent = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await studentService.addStudent(body);
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
module.exports.editStudent = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.editStudent(userId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Delete Student
 */
module.exports.removeStudent = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.removeStudent(userId, req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
