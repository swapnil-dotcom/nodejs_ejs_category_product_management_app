const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const path = require('path');

dotenv.config();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

app.get('/', (req, res) => res.render('index'));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
