const fs = require('fs');
const http = require('http');
const path = require('path');

//create server and accept requests
http.createServer((req, res)=>{
    //if the reqest method is GET send resource
    if(req.method ==="GET"){
         request(res);
         return;
    }

    //if the request method is a post process data
    if(req.method === "POST"){
        response(req, res)
        return;
    }
    error(415, "method not found",res)
}).listen(3000,()=>console.log('listening on server'))

/**
 * send an html file to client with a content-type html
 * @param {Object} res 
 */
function request(res) {
   const form = fs.readFileSync(path.join(__dirname, "public", "index.html"));
   res.writeHead(200, {
    "Content-Type": "text/html"
   })
   res.end(form);
}

/**
 * proceess client sent data
 * @param {Object} req 
 * @param {Object} res 
 * @returns 
 */
function response(req, res) {
    
    //if the request is not a data from a FORM respond with method not found
    if(req.headers["content-type"] !== "application/x-www-form-urlencoded"){
        error(415, "method not found", res);
        return;
    }
    //initalize an empty variable
    let data='';
    //read incoming datas from client
    req.on('data', (chunk)=>{
        //convert buffer to string
        data += chunk.toString();
    })

    //when reaching the end of the sent content display recived data
    req.on("end", ()=>{
        console.log(data)
        res.end(`message: successfuly recived`)
    })
}
/**
 * handle error
 * @param {Number} stat 
 * @param {String} name 
 * @param {Object} res 
 */
function error(stat, name,res) {
    res.end(`status: ${stat}, "name": ${name}`);
}