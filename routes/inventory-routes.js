const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");
const { validateInventory } = require("../middleware/Inventory-validator");


router
  .route("/")
  .get(inventoryController.getInventoriesJointWarehouse)
  .post(inventoryController.addInventoryItem);
router
  .route("/:id")
  .get(inventoryController.findInventoryItem)
  .put(inventoryController.editInventoryItem)
  .delete(inventoryController.removeInventory);

module.exports = router;
