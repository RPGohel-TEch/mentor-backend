const studentDao = require("./subject.dao");
const { Format } = require("../../../config/formate");

/**
 * Get Subject
 *
 * @param {props} props - Subject session
 */
module.exports.getSubject = async (props) => {
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

    let usersData = await studentDao.getSubject(priorityFilter, props);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Get Every Subject
 *
 * @param {props} props - Subject session
 */
module.exports.getEverySubject = async (props) => {
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

    let usersData = await studentDao.getEverySubject(priorityFilter);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {userId} userId - userId of restaurant
 */
module.exports.getSubjectFromId = async (userId) => {
  try {
    const user = await studentDao.getSubjectById(userId);
    const result = user;
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Add Subject
 *
 * @param {props} params - user details
 */
module.exports.addSubject = async (params) => {
  try {
    const result = await studentDao.addSubject(params);
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Edit Subject
 *
 * @param {userId} userId - req.param
 * @param {params} params - req.body
 */
module.exports.editSubject = async (userId, params) => {
  try {
    const result = await studentDao.editSubject(userId, params);
    return Format.success(result, "success");
  } catch (error) {
    throw error;
  }
};

/**
 * @param {userId} userId - userId
 * @param {params} params - params
 * delete Subject
 */
module.exports.removeSubject = async (userId, params) => {
  try {
    const result = await studentDao.deleteSubject(userId);
    return Format.success(result, "success");
  } catch (error) {
    logger.error(`[ SubjectService removeSubject()] ${error}`);
    throw error;
  }
};
