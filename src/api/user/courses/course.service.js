const studentDao = require("./course.dao");
const { Format } = require("../../../config/formate");

/**
 * Get Course
 *
 * @param {props} props - Course session
 */
module.exports.getCourse = async (props) => {
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

    let usersData = await studentDao.getCourse(priorityFilter, props);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Get Every Course
 *
 * @param {props} props - Course session
 */
module.exports.getEveryCourse = async (props) => {
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

    let usersData = await studentDao.getEveryCourse(priorityFilter);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {userId} userId - userId of restaurant
 */
module.exports.getCourseFromId = async (userId) => {
  try {
    const user = await studentDao.getCourseById(userId);
    const result = user;
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Add Course
 *
 * @param {props} params - user details
 */
module.exports.addCourse = async (params) => {
  try {
    const result = await studentDao.addCourse(params);
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Edit Course
 *
 * @param {userId} userId - req.param
 * @param {params} params - req.body
 */
module.exports.editCourse = async (userId, params) => {
  try {
    const result = await studentDao.editCourse(userId, params);
    return Format.success(result, "success");
  } catch (error) {
    throw error;
  }
};

/**
 * @param {userId} userId - userId
 * @param {params} params - params
 * delete Course
 */
module.exports.removeCourse = async (userId, params) => {
  try {
    const result = await studentDao.deleteCourse(userId);
    return Format.success(result, "success");
  } catch (error) {
    logger.error(`[ CourseService removeCourse()] ${error}`);
    throw error;
  }
};
