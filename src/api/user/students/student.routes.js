const router = require("express").Router();
const studentController = require("./student.controller");
const { verifyAccessToken } = require("../../../middleware/verifyAccessToken");

/* Get User details */
router.get("/", studentController.getUsers);

/* Get Every User details */
router.get("/all", studentController.getEveryUsers);

/* Get User By Id */
router.get("/:id", studentController.getUserFromId);

/* Add User */
router.post("/add-student", studentController.addUser);

/* Edit User */
router.put("/edit-student/:id", studentController.editUser);

/* Delete User By Id */
router.delete("/:id", studentController.removeUser);

module.exports = router;
