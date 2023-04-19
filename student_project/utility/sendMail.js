const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const veryfiAccountMail = (to, subjects) => {
  // Make transporter for sendin emails

  transport.sendMail({
    from: process.env.EMAIL_HOST,
    to: to,
    subject: subjects,
    html: ``,
  });
};

module.exports = sendMail;
