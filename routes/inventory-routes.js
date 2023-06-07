const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.route("/").get(inventoryController.getJoinedTable);
// router.route("/:id").get(inventoryController.getJoinedTable);
module.exports = router;
