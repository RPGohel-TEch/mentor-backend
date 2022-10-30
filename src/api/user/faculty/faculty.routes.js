const router = require("express").Router();
const userController = require("./faculty.controller");
const { verifyAccessToken } = require("../../../middleware/verifyAccessToken");

/* Get User details */
router.get("/", userController.getUsers);

/* Get Every User details */
router.get("/all", userController.getEveryUsers);

/* Get User By Id */
router.get("/:id", userController.getUserFromId);

/* Add User */
router.post("/add-faculty", userController.addUser);

/* Edit User */
router.put("/edit-faculty/:id", userController.editUser);

/* Delete User By Id */
router.delete("/:id", userController.removeUser);

module.exports = router;
