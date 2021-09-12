/* 
* Primay file for the API
*
*
*/

///Dependecies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder

//The server should respond to all request with a string
const server = http.createServer((req, res) =>{

    // Get the url and parse it
    const parsedUrl = url.parse(req.url,true)

    // get the path 
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'')

    //get the query parameters
    const queryStringObject = parsedUrl.query

    // Get the http method
    const method = req.method.toLowerCase();

    ///get the headers as an object

    const headers = req.headers;

    ///get the payloads, if any
    const decoder = new StringDecoder('utf-8')
    var buffer = ''
    req.on('data',(data)=>{
        buffer += decoder.write(data)
    })

    req.on('end', ()=>{
        buffer += decoder.end();


        // send the response
        res.end("Hello World\n")

        // log the request path
        console.log('Request received on this path: '+trimmedPath+ " with this method:" + method+" with this query string parameters: ",queryStringObject)
        console.log('Request received with this headers: ',headers)
        console.log('Request received with this payloads: ',buffer)
    })



})

//start the server, and have it listen on port 3000

server.listen(3000, ()=>{
    console.log('server is listening on port 3000');
})