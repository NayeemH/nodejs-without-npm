/*
* Tittle: Handle Request Response
* Description: A RESTful API to monitor up and down time of user defined * links.
* Author: Nayeem Hasan
* Date: 06/01/2021
* Version: 1.0
*/

//dependencies

const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routesHandlers/notFoundHandler');

// module scaffolding
const handler ={}

handler.handleReqRes = (req, res) => {
    //request url
    //get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.path;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryString = parsedUrl.query;
    const headersObject = req.headers;


    //all request properties
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryString,
        headersObject
    }

    //get the payload buffer and decode it
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    

    //handlers route
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestProperties,(statusCode, payload) => {
        //use the status code returned from the handler or set the default status code to 200
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;

        //use the payload returned from the handler or set the default payload to an empty object
        payload = typeof(payload) === 'object' ? payload : {};

        //convert the payload to a string
        const payloadString = JSON.stringify(payload);

        //set the response header
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);

        //write the payload to the response
        res.end(payloadString);

        //log the request
        console.log('Request received: ', requestProperties);
        console.log('Response sent: ', statusCode, payloadString);
    });

    req.on('data',(buffer)=>{
        realData += decoder.write(buffer);
    });

    req.on('end',()=>{
        realData += decoder.end();
        console.log(realData);
        //response handle
        res.end('Hello World,');
    });

    
}


module.exports = handler;