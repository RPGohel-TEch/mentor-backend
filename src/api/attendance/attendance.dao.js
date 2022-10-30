const Attendance = require("./attendance.model");

const buildSaveAttendanceJson = (props) => {
  const json = {};
  json.date = props.date;
  json.admin = props.admin;
  json.users = props.users || [];
  return json;
};

module.exports.getAttendanceDetails = async (filters) => {
  try {
    const details = Attendance.find(filters)
      .select("date users admin")
      .populate({ path: "users", select: "user_name mobile address" })
      .populate({ path: "admin", select: "first_name last_name" })
      .lean({ virtuals: true });
    return details;
  } catch (error) {
    throw error;
  }
};

module.exports.getAttDetailById = async (id) => {
  try {
    const users = Attendance.findOne({ _id: id })
      .select("date users admin")
      .populate({ path: "users", select: "user_name mobile address" })
      .populate({ path: "admin", select: "first_name last_name" })
      .lean({ virtuals: true });
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.postAttendance = (props) => {
  try {
    const attendance = new Attendance(buildSaveAttendanceJson(props));
    const result = attendance.save();
    return result;
  } catch (error) {
    throw error;
  }
};
