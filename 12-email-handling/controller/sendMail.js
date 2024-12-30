const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "maddison.schmeler29@ethereal.email",
          pass: "GtZ4NDgn6YdT3kpCt9",
        },
    });

    let info = await transporter.sendMail( {
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender 
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
         html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent ", info.messageId);
    res.json(info)
}

module.exports = sendMail