const Users = require("./faculty.model");

const buildSaveUserJson = (props) => {
  const json = {};
  json.first_name = props.first_name;
  json.middle_name = props.middle_name;
  json.last_name = props.last_name;
  json.semester = props.semester;
  json.address = props.address;
  json.birthdate = props.birthdate || null;
  json.mobile = props.mobile;
  json.semester = props.semester;
  json.subjects = props.subjects;
  json.pic = props.pic;
  return json;
};

module.exports.getUsers = async (filters, params) => {
  try {
    const { page = 1, limit = 25, sort } = params;
    const users = await Users.find(filters)
      .sort(sort)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .lean({ virtuals: true });
    const total = await Users.count({ ...filters });
    return {users, total};
  } catch (error) {
    throw error;
  }
};

module.exports.getEveryUsers = async (filters) => {
  try {
    const users = await Users.find(filters)
      .sort({user_name: 1})
      .lean({ virtuals: true });
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.getUserById = async (id) => {
  try {
    const users = Users.findOne({ _id: id })
      .populate("pic")
      .lean();
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.addUser = (userDetail) => {
  try {
    const user = new Users(buildSaveUserJson(userDetail));
    const result = user.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.editUser = async (userId, params) => {
  try {
    const user = await Users.findOneAndUpdate({ _id: userId }, params, {
      new: true,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteUser = async (userId) => {
  try {
    const user = await Users.findOneAndDelete({ _id: userId });
    return user;
  } catch (error) {
    throw error;
  }
};
