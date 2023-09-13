const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const randomstring = require('randomstring');

function generateOTP() {
    return randomstring.generate({
      length: 6, 
      charset: 'numeric',
    });
  }

const getOTP = (req, res) => {

    const { userEmail , userName } = req.body;

    let config = {
        service : 'gmail',
        auth : {
            user: "ssandhanakrishnan6@gmail.com",
            pass: "cepmraxfaffmhaou"
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Samadhanmitra",
            link : 'https://mailgen.js/'
        }
    })

    let otpval = generateOTP();

    let response = {
        body: {
            name : userName,
            intro: "Your OTP has arrived!",
            outro:`Your OTP to login to samadhanmitra is ${otpval} this will be expiring in 5 Minutes "Don't Share With AnyOne"`,
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : "ssandhanakrishnan6@gmail.com",
        to : userEmail,
        subject: "Place Order",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email",
            val: otpval,
            status: true,
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
}


module.exports = {
    getOTP
}