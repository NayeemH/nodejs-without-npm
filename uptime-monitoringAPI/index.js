/*
* Tittle: Uptime Monitoring API
* Description: A RESTful API to monitor up and down time of user defined * links.
* Author: Nayeem Hasan
* Date: 06/01/2021
* Version: 1.0
*/

//dependencies

const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');
const {handleReqRes} = require('./helpers/handleReqRes')

//app object -module scafolding
const app = {};

//configuation object
app.config = {
    port : 3000
};

//create server
app.createServer = () => {
    const server = http.createServer(app.handleRequestResponse);
    server.listen(app.config.port, () => {
        console.log(`Server is listening on port ${app.config.port}`);
    });
}

//handle Request Response
app.handleRequestResponse = handleReqRes;

//start server
app.createServer();