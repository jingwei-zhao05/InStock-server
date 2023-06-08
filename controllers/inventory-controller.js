const knex = require("knex")(require("../knexfile"));

const getInventories = (_req, res) => {
  knex("inventories")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Users: ${err}`));
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

module.exports = {
  getInventories,
  findInventoryItem,
};
