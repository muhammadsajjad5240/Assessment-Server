const nodemailer = require("nodemailer");
const express = require("express");
const hbs = require("nodemailer-express-handlebars");
const config = require("../config/config");
const logger = require("../config/logger");

const transport = nodemailer.createTransport(config.email.smtp);

// transport.use(
//   "compile",
//   hbs({
//     viewEngine: {
//       defaultLayout: false,
//       express,
//     },
//   })
// );
/* istanbul ignore next */
if (config.env !== "test") {
  transport
    .verify()
    .then(() => logger.info("Connected to email server"))
    .catch(() =>
      logger.warn(
        "Unable to connect to email server. Make sure you have configured the SMTP options in .env"
      )
    );
}

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, body, buttonTxt, button) => {
  const msg = {
    from: `${process.env.APP_NAME} <${config.email.from}>`,
    to,
    subject: `${process.env.APP_NAME} - ${subject}`,
    html: body,
  };
  const isSend = await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendConfirmationEmail = async (user, password) => {
  const subject = `Welcome to RopStamp`;
  const body = `<h3>Dear ${
    user?.firstName && user?.lastName
      ? `${user.firstName + " " + user.lastName}`
      : "User"
  }, <br />
  You have registered successfully. Use this email and password to login.</h3> <br /> Email: ${
    user.email
  } <br /> Password: ${password}<br /> <a href=http://${
    process.env.APP_URL
  } target="_blank">Click here to Login</a>`;
  await sendEmail(user.email, subject, body);
};

module.exports = {
  transport,
  sendEmail,
  sendConfirmationEmail,
};
