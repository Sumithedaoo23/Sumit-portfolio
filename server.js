// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // to parse JSON bodies

// // POST endpoint to handle contact form
// app.post("/contact", async (req, res) => {
//   const { name, email, phone, subject, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "dhanshreenanotkar@gmail.com", // replace with your Gmail
//       pass: " ftmxqelqzzqmjfil",   // replace with Gmail App Password
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "dhanshreenanotkar@gmail.com", // receive mail here
//     subject: New Contact: ${subject},
//     text: `
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Subject: ${subject}

// Message:
// ${message}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ message: "Failed to send email." });
//   }
// });

// app.listen(PORT, () => {
//   console.log(Server is running on http://localhost:${PORT});
// });




const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// POST endpoint to handle contact form
app.post("/contactForm", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
   console.log("Form submitted:", req.body);


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sumithedau70@gmail.com", // replace with your Gmail
      pass: "dyvgllgblxvxhgxo", // Gmail App Password
    },
  });

  const mailOptions = {
    from: email,
    to: "sumithedau70@gmail.com", // receiving email
    subject: `New Contact: ${subject}`, // <-- FIXED: string interpolation
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // <-- FIXED: string interpolation
});
