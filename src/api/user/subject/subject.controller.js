const studentService = require("./subject.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Subject
 */
module.exports.getSubject = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await studentService.getSubject(filters);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Every Subject
 */
module.exports.getEverySubject = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await studentService.getEverySubject(filters);
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
 module.exports.getSubjectFromId = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.getSubjectFromId(userId);
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
module.exports.addSubject = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await studentService.addSubject(body);
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
module.exports.editSubject = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.editSubject(userId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Delete Subject
 */
module.exports.removeSubject = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await studentService.removeSubject(userId, req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
