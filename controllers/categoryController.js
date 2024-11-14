const db = require('../config/db');

exports.list = async (req, res) => {
  const [categories] = await db.query('SELECT * FROM categories');
  res.render('category/list', { categories });
};

exports.addForm = (req, res) => {
  res.render('category/form', { category: {} });
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
  res.redirect('/category');
};

exports.editForm = async (req, res) => {
  const [category] = await db.query('SELECT * FROM categories WHERE id = ?', [req.params.id]);
  res.render('category/form', { category: category[0] });
};

exports.update = async (req, res) => {
  const { name } = req.body;
  await db.query('UPDATE categories SET name = ? WHERE id = ?', [name, req.params.id]);
  res.redirect('/category');
};

exports.delete = async (req, res) => {
  await db.query('DELETE FROM categories WHERE id = ?', [req.params.id]);
  res.redirect('/category');
};
