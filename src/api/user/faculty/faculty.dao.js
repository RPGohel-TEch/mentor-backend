const Faculty = require("./faculty.model");

const buildSaveFacultyJson = (props) => {
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

module.exports.checkFacultyExist = async (email) => {
  try {
    const faculty = await Faculty.findOne({ email });
    return faculty;
  } catch (error) {
    throw error;
  }
};

module.exports.getFaculty = async (filters, params) => {
  try {
    const { page = 1, limit = 25, sort } = params;
    const users = await Faculty.find(filters)
      .sort(sort)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .lean({ virtuals: true });
    const total = await Faculty.count({ ...filters });
    return {users, total};
  } catch (error) {
    throw error;
  }
};

module.exports.getEveryFaculty = async (filters) => {
  try {
    const users = await Faculty.find(filters)
      .sort({user_name: 1})
      .lean({ virtuals: true });
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.getFacultyById = async (id) => {
  try {
    const users = Faculty.findOne({ _id: id })
      .populate("pic")
      .lean();
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.addFaculty = (userDetail) => {
  try {
    const user = new Faculty(buildSaveFacultyJson(userDetail));
    const result = user.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.editFaculty = async (userId, params) => {
  try {
    const user = await Faculty.findOneAndUpdate({ _id: userId }, params, {
      new: true,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteFaculty = async (userId) => {
  try {
    const user = await Faculty.findOneAndDelete({ _id: userId });
    return user;
  } catch (error) {
    throw error;
  }
};
