const router = require("express").Router();
const attendanceController = require("./attendance.controller");
const { verifyAccessToken } = require("../../middleware/verifyAccessToken");

/* Get Attendance Details */
router.get("/", verifyAccessToken, attendanceController.getAttendanceDetails)

/* Add Attandance */
router.post("/add-attendance", verifyAccessToken, attendanceController.postAttendance);

module.exports = router;
