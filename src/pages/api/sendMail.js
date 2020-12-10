require('dotenv').config();
const nodemailer = require('nodemailer');

export default async (req, res) => {
  console.log(req.body);
  const {name, email, phone, description} = req.body

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: '[CEOS] - Contato',
    text: `
      Nome: ${name}
      Email: ${email}
      Phone: ${phone}
      Description: ${description}
    `
  };

  const response = await transporter.sendMail(mailOptions);

  return res.json({ message: 'Ok' })

}



