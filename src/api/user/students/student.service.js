const studentDao = require("./student.dao");
const { Format } = require("./../../../config/formate");

/**
 * Get Student
 *
 * @param {props} props - Student session
 */
module.exports.getStudent = async (props) => {
  try {
    const commonFilter = {};
    if (props.search && props.search !== "") {
      commonFilter["$and"] = [
        {
          $or: [
            {
              user_name: { $regex: ".*" + props.search + ".*", $options: "i" },
            },
          ],
        },
      ];
    }

    const priorityFilter = {
      ...commonFilter,
    };

    let usersData = await studentDao.getStudent(priorityFilter, props);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Get Every Student
 *
 * @param {props} props - Student session
 */
module.exports.getEveryStudent = async (props) => {
  try {
    const commonFilter = {};
    if (props.search && props.search !== "") {
      commonFilter["$and"] = [
        {
          $or: [
            {
              user_name: { $regex: ".*" + props.search + ".*", $options: "i" },
            },
          ],
        },
      ];
    }

    const priorityFilter = {
      ...commonFilter,
    };

    let usersData = await studentDao.getEveryStudent(priorityFilter);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {userId} userId - userId of restaurant
 */
module.exports.getStudentFromId = async (userId) => {
  try {
    const user = await studentDao.getStudentById(userId);
    const result = user;
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Add Student
 *
 * @param {props} params - user details
 */
module.exports.addStudent = async (params) => {
  try {
    const result = await studentDao.addStudent(params);
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Edit Student
 *
 * @param {userId} userId - req.param
 * @param {params} params - req.body
 */
module.exports.editStudent = async (userId, params) => {
  try {
    const result = await studentDao.editStudent(userId, params);
    return Format.success(result, "success");
  } catch (error) {
    throw error;
  }
};

/**
 * @param {userId} userId - userId
 * @param {params} params - params
 * delete Student
 */
module.exports.removeStudent = async (userId, params) => {
  try {
    const result = await studentDao.deleteStudent(userId);
    return Format.success(result, "success");
  } catch (error) {
    logger.error(`[ StudentService removeStudent()] ${error}`);
    throw error;
  }
};
