const knex = require("knex")(require("../knexfile"));

const getWarehouse = (_req, res) => {
  knex("warehouses")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Users: ${err}`));
};

const getWarehouseDetail = (req, res) => {
  knex("warehouses")
    .where({ id: req.params.id })
    .then((findWarehouse) => {
      if (findWarehouse.length === 0) {
        // Return 404 if the warehouse is not found
        return res
          .status(404)
          .json({ error: `Warehouse with ID: ${req.params.id} not found` });
      }

      res.json(findWarehouse[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: "Unable to retrieve warehouse data",
      });
    });
};

const getInventoryDetail = (req, res) => {
  knex("inventories")
    .where({ warehouse_id: req.params.id })
    .then((findInventory) => {
      if (findInventory.length === 0) {
        return res
          .status(404)
          .json({ error: `Inventory  with ID: ${req.params.id} not found` });
      }

      res.json(findInventory);
    })
    .catch(() => {
      res.status(500).json({
        message: "Unable to retrieve Inventory data",
      });
    });
};

// const   getInventoryDetail = (req, res) => {
//   knex
//     .from("warehouses")
//     .select(
//       "inventories.item_name",
//       "inventories.category",
//       "inventories.status",
//       "inventories.quantity",
//       "warehouses.id"
//     )
//     .join("inventories", "inventories.warehouse_id", "warehouses.id")
//     .then((joined) => {
//       res.status(200).json(joined);
//     })
//     .catch((error) => {
//       res.status(500).json({
//         message: `Unable to retrieve inventory data. Error: ${error}`,
//       });
//     });
// };

module.exports = {
  getWarehouse,
  getWarehouseDetail,
  getInventoryDetail,
};
