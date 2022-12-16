const router = require("express").Router();
const userController = require("./faculty.controller");

/* Get Faculty details */
router.get("/", userController.getFaculty);

/* Get Every Faculty details */
router.get("/all", userController.getEveryFaculty);

/* Get Faculty By Id */
router.get("/:id", userController.getFacultyFromId);

/* Add Faculty */
router.post("/add-faculty", userController.addFaculty);

/* Edit Faculty */
router.put("/edit-faculty/:id", userController.editFaculty);

/* Delete Faculty By Id */
router.delete("/:id", userController.removeFaculty);

module.exports = router;
