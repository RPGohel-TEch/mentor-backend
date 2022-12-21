const router = require("express").Router();
const batchController = require("./batch.controller");

/* Get batch details */
router.get("/", batchController.getBatch);

/* Get batch By Id */
router.get("/:id", batchController.getBatchFromId);

/* Add batch */
router.post("/add-batch", batchController.addBatch);

/* Edit batch */
router.put("/edit-barch/:id", batchController.editBatch);

/* Delete batch By Id */
router.delete("/:id", batchController.removeBatch);

module.exports = router;
