const router = require('express').Router();

const dashboardPersonasRouter = require('./dashboard/personas');
const dashboardProductsRouter = require('./dashboard/products');

router.use('/personas', dashboardPersonasRouter);
router.use('/products', dashboardProductsRouter);

module.exports = router;