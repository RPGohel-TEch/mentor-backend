const router = require("express").Router();
const adminController = require("./admin.controller");

/* Admin Login */
router.post("/login", adminController.loginAdminHandler);

/* Get Admin details */
router.get("/", adminController.getAdmin);

/* Get Admin By Id */
router.get("/:id", adminController.getAdminFromId);

/* Add Admin */
router.post("/add-admin", adminController.addAdmin);

/* Edit Admin */
router.put("/edit-admin/:id", adminController.editAdmin);

/* Delete Admin By Id */
router.delete("/:id", adminController.removeAdmin);

module.exports = router;
