const attendanceDao = require("./attendance.dao");
const { Format } = require("../../config/formate");

/**
 * Get Attendance Details
 *
 * @param {props} props - details session
 */
module.exports.getAttendanceDetails = async (props) => {
  try {
    const commonFilter = {};
    if (props.search && props.search !== "") {
      commonFilter["$and"] = [
        {
          $or: [
            {
              date: { $regex: ".*" + props.search + ".*", $options: "i" },
            },
          ],
        },
      ];
    }

    if (props.id && props.id !== "") {
      const user = await attendanceDao.getAttDetailById(props.id);
      return Format.success(user, "Success");
    }

    const priorityFilter = {
      ...commonFilter,
    };

    let attendanceData = await attendanceDao.getAttendanceDetails(
      priorityFilter,
      props
    );
    return Format.success(attendanceData, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Post Attendance
 *
 * @param {props} params - Attendance details
 */
module.exports.postAttendance = async (params) => {
  try {
    const result = await attendanceDao.postAttendance(params);
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};
