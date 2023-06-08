const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.route("/").get(inventoryController.getInventoriesJointWarehouse);
module.exports = router;
