const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD Routes
router.get('/', productController.list);
router.get('/add', productController.addForm);
router.post('/add', productController.create);
router.get('/edit/:id', productController.editForm);
router.post('/edit/:id', productController.update);
router.post('/delete/:id', productController.delete);

module.exports = router;
