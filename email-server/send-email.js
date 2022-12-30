const mailer = require('nodemailer');

//my smtp-server address
const transport = mailer.createTransport({
    host:'localhost',
    port:3000
});

//send
transport.sendMail({
    from: "eyobed@gamilAccount.com",
    to:"eyobedkebede@gmail.com",
    subject: "hello",
    text: "hello from your server"
},(err, data)=>{
    if(err) console.log("error: ", err);
    console.log("message sent: ", data);
})