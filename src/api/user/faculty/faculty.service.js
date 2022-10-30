const userDao = require("./faculty.dao");
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

    let usersData = await userDao.getUsers(priorityFilter, props);
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

    let usersData = await userDao.getEveryUsers(priorityFilter);
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
    const user = await userDao.getUserById(userId);
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
    const result = await userDao.addUser(params);
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
    const result = await userDao.editUser(userId, params);
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
    const result = await userDao.deleteUser(userId);
    return Format.success(result, "success");
  } catch (error) {
    logger.error(`[ UserService removeUser()] ${error}`);
    throw error;
  }
};
