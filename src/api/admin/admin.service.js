const adminDao = require("./admin.dao");
const facultyDao = require("../user/faculty/faculty.dao");
const studentDao = require("../user/students/student.dao");
const { Format } = require("../../config/formate");
const APIError = require("../../utils/APIError");
const bcrypt = require("bcrypt");

module.exports.loginAdmin = async (props) => {
  try {
    /* Check admin is  registered or not */
    const admin = await adminDao.checkAdminExist(props.email);
    const faculty = await facultyDao.checkFacultyExist(props.email);
    const student = await studentDao.checkStudentExist(props.email);
    if (admin && admin !== null) {
      const dbPassword = admin.password;
      const password = props.password;
      // const passwordDecrypt = await bcrypt.compareSync(password, dbPassword);
      if (dbPassword === password) {
        return Format.success({ admin }, "success");
      } else {
        throw new APIError({ message: "Admin Incorrect Password.", status: 500 });
      }
    } else if (faculty && faculty !== null) {
      const dbPassword = faculty.password;
      const password = props.password;
      if (dbPassword === password) {
        return Format.success({ faculty }, "success");
      }else {
        throw new APIError({ message: "Faculty Incorrect Password.", status: 500 });
      }
    } else if (student && student !== null) {
      const dbPassword = student.password;
      const password = props.password;
      if (dbPassword === password) {
        return Format.success({ student }, "success");
      } else {
        throw new APIError({ message: "Incorrect Password.", status: 500 });
      }
    } else {
      throw new APIError({ message: "User not registered.", status: 500 });
    }
  } catch (error) {
    throw error;
  }
};

/**
 * Get Admins
 *
 * @param {props} props - Admin session
 */
module.exports.getAdmins = async () => {
  try {
    let admins = await adminDao.getAdmin();
    return Format.success(admins, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {adminId} adminId - adminId of restaurant
 */
module.exports.getAdminFromId = async (adminId) => {
  try {
    const admin = await adminDao.getAdminById(adminId);
    const result = admin;
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Add Admin
 *
 * @param {props} params - Admin details
 */
module.exports.addAdmin = async (params) => {
  try {
    const admin = await adminDao.checkAdminExist(params.email);
    if (admin) {
      throw new APIError({
        message: "Admin already registered with Email.",
        status: 500,
      });
    }
    // const passwordHash = await bcrypt.hashSync(params.password, 10);
    // params.password = passwordHash;
    const result = await adminDao.addAdmin(params);
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Edit Admin
 *
 * @param {adminId} adminId - req.param
 * @param {params} params - req.body
 */
module.exports.editAdmin = async (adminId, params) => {
  try {
    const result = await adminDao.editAdmin(adminId, params);
    return Format.success(result, "success");
  } catch (error) {
    throw error;
  }
};

/**
 * @param {adminId} adminId - adminId
 * @param {params} params - params
 * delete Admin
 */
module.exports.removeAdmin = async (adminId, params) => {
  try {
    const result = await adminDao.deleteAdmin(adminId);
    return Format.success(result, "success");
  } catch (error) {
    logger.error(`[ AdminService removeAdmin()] ${error}`);
    throw error;
  }
};
