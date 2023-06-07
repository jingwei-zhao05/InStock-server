const knex = require("knex")(require("../knexfile"));

const getWarehouses = (_req, res) => {
  knex("warehouses")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Users: ${err}`));
};

const findWarehouse = (req, res) => {
  knex("warehouses")
    .where({ id: req.params.id })
    .then((warehousesFound) => {
      if (warehousesFound.length === 0) {
        return res.status(404).json({
          message: `Warehouse with ID: ${req.params.id} not found`,
        });
      }

      res.json(warehousesFound[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve warehouse data for warehouse with ID: ${req.params.id}`,
      });
    });
};

const editWarehouse = (req, res) => {
  knex("warehouses")
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
    .then(() => {
      return knex("warehouses").where({
        id: req.params.id,
      });
    })
    .then((updatedWarehouse) => {
      res.json(updatedWarehouse[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to update user with ID: ${req.params.id}`,
      });
    });
};

module.exports = {
  getWarehouses,
  findWarehouse,
  editWarehouse,
};
