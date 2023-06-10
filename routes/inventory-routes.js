const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.route("/").get(inventoryController.getInventoriesJointWarehouse);
router
  // .route("/:id")
  // .get(inventoryController.findInventoryItem);
  // .put(inventoryController.findInventoryItem);
router.route("/:id").get(inventoryController.findInventoryItem).delete(inventoryController.removeInventory);

module.exports = router;
