const router = require("express").Router();
const warehouseController = require("../controllers/warehouse-controller");

router.route("/").get(warehouseController.getWarehouse);

module.exports = router;
