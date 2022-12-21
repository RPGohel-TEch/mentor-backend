const batchService = require("./batch.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Batch
 */
module.exports.getBatch = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await batchService.getBatch(filters);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get Every Batch
 */
module.exports.getEveryBatch = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await batchService.getEveryBatch(filters);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
 module.exports.getBatchFromId = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await batchService.getBatchFromId(userId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.addBatch = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await batchService.addBatch(body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.editBatch = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await batchService.editBatch(userId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Delete Batch
 */
module.exports.removeBatch = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await batchService.removeBatch(userId, req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
