const attendanceService = require("./attendance.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.getAttendanceDetails = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await attendanceService.getAttendanceDetails(filters);
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
module.exports.postAttendance = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await attendanceService.postAttendance(body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
