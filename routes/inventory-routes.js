const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.route("/").get(inventoryController.getInventoriesJointWarehouse);
router
  .route("/:id")
  .get(inventoryController.findInventoryItem)
  .put(inventoryController.findInventoryItem);

module.exports = router;
