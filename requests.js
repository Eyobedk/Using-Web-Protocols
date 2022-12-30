const http = require('http');

const payload = JSON.stringify({name: "eyobed", job: "developer"});

const options = {
    method: "POST",
    hostname : 'postman-echo.com',
    path: '/post',
    headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
    }
}

//send a request to the specified external server
const request = http.request(options, (res)=>{
    //send the response status code
    process.stdout.write(`status code ${res.statusCode}`);

    //streams the response to console by using pipe
    res.pipe(process.stdout);
})

request.on("error", (error)=>{
    console.error(error)
})
request.end(payload);