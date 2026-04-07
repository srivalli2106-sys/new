const nodemailer = require("nodemailer");

const sendEmail = async (to) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Complaint Submitted Successfully",
    text: "Your complaint has been registered successfully."
  });
};

module.exports = sendEmail;
