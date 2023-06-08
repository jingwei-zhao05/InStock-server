const knex = require("knex")(require("../knexfile"));

const getInventoriesJointWarehouse = (req, res) => {
  knex
    .from("inventories")
    .select(
      "inventories.item_name",
      "inventories.category",
      "inventories.status",
      "inventories.quantity",
      "warehouse_name"
    )
    .join("warehouses", "inventories.warehouse_id", "warehouses.id")
    .then((joined) => {
      res.status(200).json(joined);
    })
    .catch((error) => {
      res.status(500).json({
        message: `Unable to retrieve inventory data. Error: ${error}`,
      });
    });
};

module.exports = {
  getInventoriesJointWarehouse,
};
