/* 
* Primay file for the API
*
*
*/
///Dependecies
const http = require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder

//The server should respond to all request with a string
const server = http.createServer(function(req,res){
    

    // Get the url and parse it
    const parsedUrl = url.parse(req.url,true)
    console.log(parsedUrl)

    // get the path 
    const path = parsedUrl.pathname
    //console.log(path)
    const trimmedPath = path.replace(/^\/+|\/+$/g,'')

    //get the query string as an object
    const  queryStringObject = parsedUrl.query

    // Get the http method
    const method = req.method.toLowerCase()

    ///get the headers as an object
    const headers = req.headers


    ///get the payloads, if any
    var decoder = new StringDecoder('utf-8')
    var buffer = '';
    req.on('data',function(data){
        buffer += decoder.write(data)
    })
    req.on('end',function(){
        buffer +=decoder.end()

        // send the response
        res.end('Hello world\n')

        // log the request path
        console.log(`Request received on this path ${trimmedPath} with this: ${method} and with these query string parameters`,queryStringObject)
        console.log(`Request received with thise header:`,headers)
        console.log(`Request received with thise payload:`,buffer)
    })

        
    })

//start the server, and have it listen on port 3000
server.listen(3000,function(){
    console.log("server is listening on port 3000 now")
})
