const router = require("express").Router();
const studentController = require("./course.controller");
const { verifyAccessToken } = require("../../../middleware/verifyAccessToken");

/* Get User details */
router.get("/", studentController.getUsers);

/* Get User By Id */
router.get("/:id", studentController.getUserFromId);

/* Add User */
router.post("/add-course", studentController.addUser);

/* Edit User */
router.put("/edit-course/:id", studentController.editUser);

/* Delete User By Id */
router.delete("/delete-course/:id", studentController.removeUser);

module.exports = router;
