import asyncHandler from "express-async-handler";
import mail from "@sendgrid/mail";

// @desc Fetch all categories
// @route  POST /api/mail
// @access Public
const sendMail = asyncHandler(async (req, res) => {
  const messageData = req.body.data;
  const { email, fullName, message, subject } = messageData;
  const msg = `
              Name:${fullName}\r\n
              Email:${email}\r\n
              Subject:${subject}\r\n
              Message:${message}
          `;
  const data = {
    to: "support@fishingshirtsnow.com",
    from: "support@fishingshirtsnow.com",
    subject: "new fishingshirtsnow contact form message!",
    text: msg,
    html: msg.replace(/\r\n/g, "<br>"),
  };

  if (data) {
    await mail.send(data);
    res.status(200).json({ status: "Ok" });
  } else {
    res.status(500).json({ error: "failed to send message" });
  }
});

export { sendMail };
