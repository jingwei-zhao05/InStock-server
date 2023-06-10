const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");
const { validateInventory } = require("../middleware/inventory-validator");

router
  .route("/")
  .get(inventoryController.getInventoriesJointWarehouse)
  .post(inventoryController.addInventoryItem);
router
  .route("/:id")
  .get(inventoryController.findInventoryItem)
  .delete(inventoryController.removeInventory);

module.exports = router;
