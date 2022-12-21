const router = require("express").Router();

const studentRoute = require("./user/students/student.routes");
const facultyRoute = require("./user/faculty/faculty.routes");
const adminRoute = require("./admin/admin.routes");
const courseRoute = require("./user/courses/course.routes");
const subjectRoute = require("./user/subject/subject.routes");
const batchRoute = require("./user/batch/batch.routes");

router.use("/student", studentRoute);

router.use("/faculty", facultyRoute);

router.use("/admin", adminRoute);

router.use("/course", courseRoute);

router.use("/subject", subjectRoute);

router.use("/batch", batchRoute);

module.exports = router;
