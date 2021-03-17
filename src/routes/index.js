const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();
router.post("/send-email", async (req, res) => {
  const { name, email, message, subject } = req.body;
  contentHTML = `
  <h1>Solicitud de contacto</h1>
  <ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    <li>Subject: ${subject}</li>
    </ul>
    <p>${message}</p>
  
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    auth: {
      user: "miportafolio.actual@outlook.com",
      pass: "Miportafolio",
    },
  });
  const info = await transporter.sendMail({
    from: "'Portafolio' <miportafolio.actual@outlook.com>",
    to: "miportafolio.actual@outlook.com",
    subject: "Webside contact form",
    text: contentHTML,
  });
  res.send(console.log(info.messageId));
});
module.exports = router;
