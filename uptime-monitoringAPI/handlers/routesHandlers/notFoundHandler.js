/*
* Tittle: Not Found Route handler
* Description: 404 Not Found Route handler
* Author: Nayeem Hasan
* Date: 06/01/2021
* Version: 1.0
*/

//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(404, {
        message: 'This route does not exist!',
    })
}

module.exports = handler;