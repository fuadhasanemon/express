const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config(); 



const veryfiAccountMail = async (to, subjects, data = {  }) => {
  // Make transporter for sendin emails
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

 await transport.sendMail({
    from: process.env.EMAIL_HOST,
    to: to,
    subject: subjects,
    text : "Verify account",
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .email-logo {
            width: 200px;
            height: auto;
          }
    
          .main-wrapper {
            height: 100vh;
            width: 100%;
            background-color: gray;
            overflow: hidden;
          }
    
          .wrapper {
            background-color: #fff;
            width: 550px;
            height: 500px;
            padding: 20px;
            margin: 200px auto;
          }
    
          .verify_btn {
            padding: 20px;
            background-color: bisque;
            font-size: 16px;
            font-weight: 300;
            font-family: fantasy;
            text-decoration: none;
            border-radius: 5px;
          }
    
          .socials ul {
            display: flex;
            list-style: none;
            justify-content: start;
            padding: 0;
          }
    
          .socials img {
            width: 30px;
          }
    
          p,
          a,
          h3 {
            padding: 20px 10px;
            margin: 20px 0;
          }
    
          h2 {
            padding: 0 10px;
            margin-top: 20px;
            margin-bottom: 0;
          }
    
          .footer {
            padding-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="main-wrapper">
          <div class="wrapper">
            <div class="header">
              <a href="">
                <img class="email-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Payoneer_logo.svg/1200px-Payoneer_logo.svg.png" alt="" />
              </a>
            </div>
            <hr />
            <h2>Dear ${ data.name } dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vero
              deserunt ipsam tempore, sed quod eligendi beatae esse distinctio
              autem.
            </p>
            <a class="verify_btn" href="http://localhost:5050/student/verify/${ data.token }">Verify Now</a>
            <div class="footer">
              <h3><span>Your account cell : ${ data.phone }</span></h3>
    
              <div class="socials">
                <ul>
                  <li>
                    <a href="">
                      <img
                        src="https://img.icons8.com/color/256/facebook-new.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src="https://img.icons8.com/color/256/facebook-new.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src="https://img.icons8.com/color/256/facebook-new.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src="https://img.icons8.com/color/256/facebook-new.png"
                        alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `,
  });
};

module.exports = veryfiAccountMail;
