/*
* Tittle: Routes
* Description: Application routes
* Author: Nayeem Hasan
* Date: 06/01/2021
* Version: 1.0
*/

//dependencies
const {sampleHandler} = require('./handlers/routesHandlers/sampleHandler');
const routes ={
    'sample': sampleHandler,
}

module.exports = routes;