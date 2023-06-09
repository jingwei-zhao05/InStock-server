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

const findInventoryItem = (req, res) => {
  knex("inventories")
    .where({ id: req.params.id })
    .then((inventoryItemFound) => {
      if (inventoryItemFound.length === 0) {
        return res.status(404).json({
          message: `Inventory with ID ${req.params.id} not found`,
        });
      }
      res.json(inventoryItemFound[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrive inventory data with ID: ${req.params.id}`,
      });
    });
};


const editInventoryItem = (req, res) => {
  knex("inventories")
    .where({ id: req.params.id })
    .update({
      warehouse_name: req.body.warehouse_name,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      contact_name: req.body.contact_name,
      contact_position: req.body.contact_position,
      contact_phone: req.body.contact_phone,
      contact_email: req.body.contact_email,
    })
    .then((result) => {
      if (result === 0) {
        return res.status(404).json({
          message: `item with ID: ${req.params.id} not found.`,
        });
      }

      return knex("warehouses").where({
        id: req.params.id,
      });
    })
    .then((updatedWarehouse) => {
      res.json(updatedWarehouse[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to update item with ID: ${req.params.id}`,
      });
    });
};


module.exports = {
  getInventoriesJointWarehouse,
  findInventoryItem,
  editInventoryItem
};
