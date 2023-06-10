const knex = require("knex")(require("../knexfile"));
const { body, validationResult } = require("express-validator");



const validateInventory = [
    body('warehouse_id').notEmpty().withMessage('Warehouse id is required'),
    body('item_name').notEmpty().withMessage('Item name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('category').notEmpty().withMessage('Category is required'),
    body('status').notEmpty().withMessage('Status is required'),
    body('quantity').notEmpty().withMessage('Quantity is required'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        next();
      },
]


module.exports = {
    validateInventory,
  };
  