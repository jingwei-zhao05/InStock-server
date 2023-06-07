const knex = require("knex")(require("../knexfile"));

// const getInventory = (_req, res) => {
//   knex("inventories")
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => res.status(400).send(`Error retrieving Users: ${err}`));
// };

const getJoinedTable = (req, res) => {
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
  // getInventory,
  getJoinedTable,
};
