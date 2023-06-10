const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");
const { validateInventory } = require("../middleware/Inventory-validator");

router.route("/").get(inventoryController.getInventoriesJointWarehouse);
router
  .route("/:id")
  // .get(inventoryController.findInventoryItem);
  .put(inventoryController.editInventoryItem);
  // .put(validateInventory,inventoryController.editInventoryItem);
router.route("/:id").get(inventoryController.findInventoryItem).delete(inventoryController.removeInventory);

module.exports = router;
