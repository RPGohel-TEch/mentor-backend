const Subject = require("./subject.model");

const buildSaveSubjectJson = (props) => {
  const json = {};
  json.subject_name = props.subject_name;
  json.semester = props.semester;
  json.batch = props.batch || null;
  json.faculty = props.faculty || null;
  json.branch = props.branch;
  return json;
};

module.exports.getSubject = async (filters, params) => {
  try {
    const { page = 1, limit = 25, sort } = params;
    const users = await Subject.find(filters)
      .sort(sort)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .lean({ virtuals: true });
    const total = await Subject.count({ ...filters });
    return {users, total};
  } catch (error) {
    throw error;
  }
};

module.exports.getEverySubject = async (filters) => {
  try {
    const users = await Subject.find(filters)
      .sort({user_name: 1})
      .lean({ virtuals: true });
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.getSubjectById = async (id) => {
  try {
    const users = Subject.findOne({ _id: id })
      .populate("pic")
      .lean();
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.addSubject = (userDetail) => {
  try {
    const user = new Subject(buildSaveSubjectJson(userDetail));
    const result = user.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.editSubject = async (userId, params) => {
  try {
    const user = await Subject.findOneAndUpdate({ _id: userId }, params, {
      new: true,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteSubject = async (userId) => {
  try {
    const user = await Subject.findOneAndDelete({ _id: userId });
    return user;
  } catch (error) {
    throw error;
  }
};
