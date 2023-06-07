const router = require("express").Router();
const warehouseController = require("../controllers/warehouse-controller");

router.route("/").get(warehouseController.getWarehouses);
router
  .route("/:id")
  .get(warehouseController.findWarehouse)
  .put(warehouseController.editWarehouse);

module.exports = router;
