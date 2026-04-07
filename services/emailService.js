const nodemailer = require("nodemailer");

const sendEmail = async (to) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Complaint System" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: "Complaint Submitted Successfully",
      text: "Your complaint has been registered successfully."
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
