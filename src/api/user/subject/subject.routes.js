const router = require("express").Router();
const studentController = require("./subject.controller");

/* Get Subject details */
router.get("/", studentController.getSubject);

/* Get Subject By Id */
router.get("/:id", studentController.getSubjectFromId);

/* Add Subject */
router.post("/add-subject", studentController.addSubject);

/* Edit Subject */
router.put("/edit-subject/:id", studentController.editSubject);

/* Delete Subject By Id */
router.delete("/:id", studentController.removeSubject);

module.exports = router;
