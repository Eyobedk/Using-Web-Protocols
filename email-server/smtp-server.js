const smtpServer = require('smtp-server').SMTPServer;

//create server without security checks
const server = new smtpServer({disabledCommands:["STARTTLS","AUTH"], logger: true});

server.on("error", (err)=>{console.log(err)});
server.listen(3000,()=>{console.log('listening on server 3000')})