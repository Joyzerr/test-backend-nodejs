const { Router } = require("express");
const CategoryController = require("./controllers/CategoryController");
const ProductController = require ('./controllers/ProductController');

const routes = new Router();
routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.destroy);


module.exports = routes;