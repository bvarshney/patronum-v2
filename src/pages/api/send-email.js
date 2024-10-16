import nodemailer from "nodemailer";

const emailfrom = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailfrom,
    pass,
  },
});

export default async (req, res) => {
  if (req.method === "POST") {
    try {

      const { message, subject } = req.body;

      // Define email data
      const mailOptions = {
        from: emailfrom,
        to: `paul.lees@bespinlabs.com, b@weareenigma.com, sales@bespinlabs.com`,
        subject: subject || "Form Response",
        html: message,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Email could not be sent" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
