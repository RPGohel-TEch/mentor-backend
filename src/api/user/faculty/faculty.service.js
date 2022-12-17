const userDao = require("./faculty.dao");
const { Format } = require("./../../../config/formate");

/**
 * Get Faculty
 *
 * @param {props} props - Faculty session
 */
module.exports.getFaculty = async (props) => {
  try {
    const commonFilter = {};
    if (props.search && props.search !== "") {
      commonFilter["$and"] = [
        {
          $or: [
            {
              name: { $regex: ".*" + props.search + ".*", $options: "i" },
            },
          ],
        },
      ];
    }

    const priorityFilter = {
      ...commonFilter,
    };

    let usersData = await userDao.getFaculty(priorityFilter, props);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Get Every Faculty
 *
 * @param {props} props - Faculty session
 */
module.exports.getEveryFaculty = async (props) => {
  try {
    const commonFilter = {};
    if (props.search && props.search !== "") {
      commonFilter["$and"] = [
        {
          $or: [
            {
              name: { $regex: ".*" + props.search + ".*", $options: "i" },
            },
          ],
        },
      ];
    }

    const priorityFilter = {
      ...commonFilter,
    };

    let usersData = await userDao.getEveryFaculty(priorityFilter);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {userId} userId - userId of restaurant
 */
module.exports.getFacultyFromId = async (userId) => {
  try {
    const user = await userDao.getFacultyById(userId);
    const result = user;
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Add Faculty
 *
 * @param {props} params - user details
 */
module.exports.addFaculty = async (params) => {
  try {
    const result = await userDao.addFaculty(params);
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Edit Faculty
 *
 * @param {userId} userId - req.param
 * @param {params} params - req.body
 */
module.exports.editFaculty = async (userId, params) => {
  try {
    const result = await userDao.editFaculty(userId, params);
    return Format.success(result, "success");
  } catch (error) {
    throw error;
  }
};

/**
 * @param {userId} userId - userId
 * @param {params} params - params
 * delete Faculty
 */
module.exports.removeFaculty = async (userId, params) => {
  try {
    const result = await userDao.deleteFaculty(userId);
    return Format.success(result, "success");
  } catch (error) {
    throw error;
  }
};
