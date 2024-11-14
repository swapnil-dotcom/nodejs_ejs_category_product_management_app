const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// CRUD Routes
router.get('/', categoryController.list);
router.get('/add', categoryController.addForm);
router.post('/add', categoryController.create);
router.get('/edit/:id', categoryController.editForm);
router.post('/edit/:id', categoryController.update);
router.post('/delete/:id', categoryController.delete);

module.exports = router;
