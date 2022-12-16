const facultyService = require("./faculty.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Faculty
 */
module.exports.getFaculty = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await facultyService.getFaculty(filters);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Every Faculty
 */
module.exports.getEveryFaculty = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await facultyService.getEveryFaculty(filters);
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
 module.exports.getFacultyFromId = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await facultyService.getFacultyFromId(userId);
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
module.exports.addFaculty = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await facultyService.addFaculty(body);
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
module.exports.editFaculty = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await facultyService.editFaculty(userId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Delete Faculty
 */
module.exports.removeFaculty = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await facultyService.removeFaculty(userId, req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
