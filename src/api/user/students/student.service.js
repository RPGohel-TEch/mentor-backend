const studentDao = require("./student.dao");
const { Format } = require("./../../../config/formate");

/**
 * Get Users
 *
 * @param {props} props - User session
 */
module.exports.getUsers = async (props) => {
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

    let usersData = await studentDao.getUsers(priorityFilter, props);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Get Every Users
 *
 * @param {props} props - User session
 */
module.exports.getEveryUsers = async (props) => {
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

    let usersData = await studentDao.getEveryUsers(priorityFilter);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {userId} userId - userId of restaurant
 */
module.exports.getUserFromId = async (userId) => {
  try {
    const user = await studentDao.getUserById(userId);
    const result = user;
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Add User
 *
 * @param {props} params - user details
 */
module.exports.addUser = async (params) => {
  try {
    const result = await studentDao.addUser(params);
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Edit User
 *
 * @param {userId} userId - req.param
 * @param {params} params - req.body
 */
module.exports.editUser = async (userId, params) => {
  try {
    const result = await studentDao.editUser(userId, params);
    return Format.success(result, "success");
  } catch (error) {
    throw error;
  }
};

/**
 * @param {userId} userId - userId
 * @param {params} params - params
 * delete User
 */
module.exports.removeUser = async (userId, params) => {
  try {
    const result = await studentDao.deleteUser(userId);
    return Format.success(result, "success");
  } catch (error) {
    logger.error(`[ UserService removeUser()] ${error}`);
    throw error;
  }
};
