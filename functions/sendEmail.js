"use strict"
const nodemailer = require("nodemailer")

exports.handler = function(event, context, callback) {
  const { EMAIL, PASSWORD } = process.env
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const data = JSON.parse(event.body)
    const { name, email, message, subject } = data
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    })

    // send mail with defined transport object
    let info = await transporter.sendMail(
      {
        from: `${name} <${EMAIL}>`, // sender address
        replyTo: email,
        to: EMAIL, // list of receivers
        subject: "New Email", // Subject line
        // plain text body: text: message,
        html: `<p style="white-space: pre-wrap;">${message}</p>`, // html body
      },
      function(error, info) {
        if (error) {
          callback(error)
        } else {
          callback(null, {
            statusCode: 200,
            body: "Ok",
          })
        }
      }
    )
  }
  main().catch(console.error)
}
