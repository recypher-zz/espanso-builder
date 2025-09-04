const nodemailer = require("nodemailer");

const email_host = process.env.EMAIL_HOST;
const email_port = parseInt(process.env.EMAIL_PORT, 10);
const email_user = process.env.EMAIL_USER;
const email_pass = process.env.EMAIL_PASS;
const approval_email = process.env.APPROVAL_EMAIL;

if (!email_host || !email_port || !email_user || !email_pass) {
  throw new Error("Missing required email environment variables");
}

const transporter = nodemailer.createTransport({
  host: email_host,
  port: email_port,
  secure: email_port === 465,
  auth: {
    user: email_user,
    pass: email_pass,
  },
});

const prepareEmail = (trigger, replace, id) => {
  const html = `
  <h1>New Trigger Requested</h1>
  <p><strong>Trigger:</strong> ${trigger}</p>
  <p><strong>Replace Text:</strong> ${replace}</p>
  <h2><a href="/triggers/approval/${id}">View</a></h2>
  `

  return html;
}

const sendApprovalEmail = (subject, html) => {
  transporter.sendMail({
    from: '"Espanso Builder" <espanso@niemergk.com',
    to: approval_email,
    subject,
    html,
  });
}

module.exports = { transporter, prepareEmail, sendApprovalEmail };
