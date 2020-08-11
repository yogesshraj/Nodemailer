const nodemailer = require("nodemailer");

// Only needed if you don't have a real mail account for testing

// let testAccount = nodemailer.createTestAccount();


var transporter = nodemailer.createTransport({
    service : "gmail", 
    auth :{
        user:"yogessh19@navgurukul.org",
        pass:"your password"
    }
})

// Details to be added. You can also attach files and html docs 
var mailRecipients = {
    from :"yogessh19@navgurukul.org",
    to : "yogesshraj@gmail.com",
    subject : "Nodemailer",
    text : "Sending mail using nodemailer in NodeJS"
};


// sendMail() sends mail to respective account referred in "to" in mailRecipients
transporter.sendMail(mailRecipients,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Email sent: " +info.response)
    }
})