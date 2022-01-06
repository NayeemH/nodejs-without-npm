/*
* Tittle: Sample Handler
* Description: Sample Handlers
* Author: Nayeem Hasan
* Date: 06/01/2021
* Version: 1.0
*/

//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample message',
    });
}

module.exports = handler;