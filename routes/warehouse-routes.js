const router = require("express").Router();
const warehouseController = require("../controllers/warehouse-controller");

router.route("/").get(warehouseController.getWarehouse);
router.route("/:id").get(warehouseController.getWarehouseDetail)

module.exports = router;
