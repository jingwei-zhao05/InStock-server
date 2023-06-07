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
  .where({ id: req.params.id})
    .then((findWarehouse) => {
      if (findWarehouse.length===0) {
        // Return 404 if the warehouse is not found
        return res.status(404).json({ error: `Warehouse with ID: ${req.params.id} not found`});
      }

      res.json(findWarehouse[0]);
    })
    .catch(() => {
      res.status(500).json({
        message:"Unable to retrieve warehouse data"
      })
    })
}

module.exports = {
  getWarehouse,
  getWarehouseDetail
};
