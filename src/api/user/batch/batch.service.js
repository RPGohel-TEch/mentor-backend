const batchDao = require("./batch.dao");
const { Format } = require("../../../config/formate");

/**
 * Get Batch
 *
 * @param {props} props - Batch session
 */
module.exports.getBatch = async (props) => {
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

    let usersData = await batchDao.getBatch(priorityFilter, props);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Get Every Batch
 *
 * @param {props} props - Batch session
 */
module.exports.getEveryBatch = async (props) => {
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

    let usersData = await batchDao.getEveryBatch(priorityFilter);
    return Format.success(usersData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {userId} userId - userId of restaurant
 */
module.exports.getBatchFromId = async (userId) => {
  try {
    const user = await batchDao.getBatchById(userId);
    const result = user;
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Add Batch
 *
 * @param {props} params - user details
 */
module.exports.addBatch = async (params) => {
  try {
    const result = await batchDao.addBatch(params);
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Edit Batch
 *
 * @param {userId} userId - req.param
 * @param {params} params - req.body
 */
module.exports.editBatch = async (userId, params) => {
  try {
    const result = await batchDao.editBatch(userId, params);
    return Format.success(result, "success");
  } catch (error) {
    throw error;
  }
};

/**
 * @param {userId} userId - userId
 * @param {params} params - params
 * delete Batch
 */
module.exports.removeBatch = async (userId, params) => {
  try {
    const result = await batchDao.deleteBatch(userId);
    return Format.success(result, "success");
  } catch (error) {
    logger.error(`[ BatchService removeBatch()] ${error}`);
    throw error;
  }
};
