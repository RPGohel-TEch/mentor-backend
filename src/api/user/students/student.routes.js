const router = require("express").Router();
const studentController = require("./student.controller");

/* Get Student details */
router.get("/", studentController.getStudent);

/* Get Every Student details */
router.get("/all", studentController.getEveryStudent);

/* Get Student By Id */
router.get("/:id", studentController.getStudentFromId);

/* Add Student */
router.post("/add-student", studentController.addStudent);

/* Edit Student */
router.put("/edit-student/:id", studentController.editStudent);

/* Delete Student By Id */
router.delete("/:id", studentController.removeStudent);

module.exports = router;
