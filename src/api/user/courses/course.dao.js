const Course = require("./course.model");

const buildSaveCourseJson = (props) => {
  const json = {};
  json.course_name = props.course_name;
  json.semester = props.semester;
  json.batch = props.batch || [];
  return json;
};

module.exports.getCourse = async (filters, params) => {
  try {
    const { page = 1, limit = 25, sort } = params;
    const users = await Course.find(filters)
      .sort(sort)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .lean({ virtuals: true });
    const total = await Course.count({ ...filters });
    return {users, total};
  } catch (error) {
    throw error;
  }
};

module.exports.getEveryCourse = async (filters) => {
  try {
    const users = await Course.find(filters)
      .sort({user_name: 1})
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.getCourseById = async (id) => {
  try {
    const users = Course.findOne({ _id: id })
      .lean();
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.addCourse = (userDetail) => {
  try {
    const user = new Course(buildSaveCourseJson(userDetail));
    const result = user.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.editCourse = async (userId, params) => {
  try {
    const user = await Course.findOneAndUpdate({ _id: userId }, params, {
      new: true,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteCourse = async (userId) => {
  try {
    const user = await Course.findOneAndDelete({ _id: userId });
    return user;
  } catch (error) {
    throw error;
  }
};
