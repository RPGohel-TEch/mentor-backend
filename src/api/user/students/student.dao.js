const Student = require("./student.model");

const buildSaveStudentJson = (props) => {
  const json = {};
  json.name = props.name;
  json.password = props.password;
  json.semester = props.semester || null;
  json.address = props.address || null;
  json.birthdate = props.birthdate || null;
  json.mobile = props.mobile || null;
  json.branch = props.branch || null;
  json.batch = props.batch || null;
  json.email = props.email || null;
  json.enrollment_no = props.enrollment_no || null;
  json.ssc_result = props.ssc_result || null;
  json.hsc_result = props.hsc_result || null;
  json.pic = props.pic;
  return json;
};

module.exports.checkStudentExist = async (email) => {
  try {
    const student = await Student.findOne({ email });
    return student;
  } catch (error) {
    throw error;
  }
};

module.exports.getStudent = async (filters, params) => {
  try {
    const { page = 1, limit = 25, sort } = params;
    const student = await Student.find(filters)
      .sort(sort)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .lean({ virtuals: true });
    const total = await Student.count({ ...filters });
    return {student, total};
  } catch (error) {
    throw error;
  }
};

module.exports.getEveryStudent = async (filters) => {
  try {
    const student = await Student.find(filters)
      .sort({name: 1})
      .lean({ virtuals: true });
    return student;
  } catch (error) {
    throw error;
  }
};

module.exports.getStudentById = async (id) => {
  try {
    const student = Student.findOne({ _id: id })
      .populate("pic")
      .lean();
    return student;
  } catch (error) {
    throw error;
  }
};

module.exports.addStudent = (userDetail) => {
  try {
    const user = new Student(buildSaveStudentJson(userDetail));
    const result = user.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.editStudent = async (userId, params) => {
  try {
    const user = await Student.findOneAndUpdate({ _id: userId }, params, {
      new: true,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteStudent = async (userId) => {
  try {
    const user = await Student.findOneAndDelete({ _id: userId });
    return user;
  } catch (error) {
    throw error;
  }
};
