const router = require("express").Router();
const studentController = require("./subject.controller");
const { verifyAccessToken } = require("../../../middleware/verifyAccessToken");

/* Get User details */
router.get("/", studentController.getUsers);

/* Get User By Id */
router.get("/:id", studentController.getUserFromId);

/* Add User */
router.post("/add-subject", studentController.addUser);

/* Edit User */
router.put("/edit-subject/:id", studentController.editUser);

/* Delete User By Id */
router.delete("/delete-subject/:id", studentController.removeUser);

module.exports = router;
