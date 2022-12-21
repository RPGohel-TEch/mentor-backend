const Batch = require("./batch.model");

const buildSaveBatchJson = (props) => {
  const json = {};
  json.semester = props.semester;
  json.branch = props.branch;
  json.batch = props.batch || null;
  return json;
};

module.exports.getBatch = async (filters, params) => {
  try {
    const { page = 1, limit = 25, sort } = params;
    const users = await Batch.find(filters)
      .sort(sort)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .lean({ virtuals: true });
    const total = await Batch.count({ ...filters });
    return {users, total};
  } catch (error) {
    throw error;
  }
};

module.exports.getEveryBatch = async (filters) => {
  try {
    const users = await Batch.find(filters)
      .sort({user_name: 1})
      .lean({ virtuals: true });
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.getBatchById = async (id) => {
  try {
    const users = Batch.findOne({ _id: id })
      .populate("pic")
      .lean();
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.addBatch = (userDetail) => {
  try {
    const user = new Batch(buildSaveBatchJson(userDetail));
    const result = user.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.editBatch = async (userId, params) => {
  try {
    const user = await Batch.findOneAndUpdate({ _id: userId }, params, {
      new: true,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteBatch = async (userId) => {
  try {
    const user = await Batch.findOneAndDelete({ _id: userId });
    return user;
  } catch (error) {
    throw error;
  }
};
