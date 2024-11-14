const db = require('../config/db');

exports.list = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    const [products] = await db.query(
        `SELECT 
        products.id, 
        products.name, 
        categories.name AS category_name, 
        categories.id AS category_id
       FROM products
       LEFT JOIN categories ON products.category_id = categories.id
       LIMIT ?, ?`,
        [offset, pageSize]
    );

    res.render('product/list', { products, page });
};


exports.addForm = async (req, res) => {
    const [categories] = await db.query('SELECT * FROM categories');
    res.render('product/form', { product: {}, categories });
};

exports.create = async (req, res) => {
    const { name, category_id } = req.body;
    await db.query('INSERT INTO products (name, category_id) VALUES (?, ?)', [name, category_id]);
    res.redirect('/product');
};

exports.editForm = async (req, res) => {
    const [product] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
    const [categories] = await db.query('SELECT * FROM categories');
    res.render('product/form', { product: product[0], categories });
};

exports.update = async (req, res) => {
    const { name, category_id } = req.body;
    await db.query('UPDATE products SET name = ?, category_id = ? WHERE id = ?', [name, category_id, req.params.id]);
    res.redirect('/product');
};

exports.delete = async (req, res) => {
    await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
    res.redirect('/product');
};
