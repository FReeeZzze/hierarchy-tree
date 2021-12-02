const { Router } = require('express');
const { getCities, getCitizens } = require('../controllers/apiController.js');

const apiRouter = Router();

//get запросы
apiRouter.get('/cities', getCities);
apiRouter.get('/citizens', getCitizens);

module.exports = apiRouter;
