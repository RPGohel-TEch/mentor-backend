const router = require("express").Router();
const studentController = require("./course.controller");

/* Get Course details */
router.get("/", studentController.getCourse);

/* Get Course By Id */
router.get("/:id", studentController.getCourseFromId);

/* Add Course */
router.post("/add-course", studentController.addCourse);

/* Edit Course */
router.put("/edit-course/:id", studentController.editCourse);

/* Delete Course By Id */
router.delete("/delete-course/:id", studentController.removeCourse);

module.exports = router;
