const adminService = require("./admin.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Login Admin controller
 */
 module.exports.loginAdminHandler = async (req, res, next) => {
  try {
    const props = req.body;
    const result = await adminService.loginAdmin(props);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get admin
 */
module.exports.getAdmin = async (req, res, next) => {
  try {
    const result = await adminService.getAdmins();
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
 module.exports.getAdminFromId = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const result = await adminService.getAdminFromId(adminId);
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
module.exports.addAdmin = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await adminService.addAdmin(body);
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
module.exports.editAdmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const result = await adminService.editAdmin(adminId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Delete admin
 */
module.exports.removeAdmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const result = await adminService.removeAdmin(adminId, req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
