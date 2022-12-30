const http = require("http");

//create server and accept requests
const server = http.createServer((req, res)=>{
    if(req.url === '/todos') return todo(res);
    if(req.url === '/') return index(res);
    error(res, 404)
})

/**
 * handle tasks related with todos
 * @param {Object} res 
 */
function todo(res){
    res.end(JSON.stringify([{id: 1, task: "eat"}, {id: 2, task: "pray"}, {id: 3, task: "sleep"}]))
}

/**
 * home page handler
 * @param {Object} res 
 */
function index(res){
    res.end(JSON.stringify({data: "this is the home page"}))
}

/**
 * error handler
 * @param {Object} res 
 * @param {Number} status 
 */
function error(res, status){
    res.end(JSON.stringify({statusCode: status, name:"page not found"}))
}

server.listen(3000, '0.0.0.0', ()=>{
    console.log("server running on 3000")
})