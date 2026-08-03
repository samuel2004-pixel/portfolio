import nodemailer from "nodemailer";

const transporter =
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:
        process.env.EMAIL_USER,
      pass:
        process.env.EMAIL_PASSWORD,
    },
  });

export async function sendEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  return transporter.sendMail({
    from:
      process.env.EMAIL_USER,
    to:
      process.env.CONTACT_RECEIVER,
    subject:
      `Portfolio Contact: ${subject}`,
    html: `
      <h2>New Portfolio Message</h2>

      <p><b>Name:</b> ${name}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Message:</b></p>

      <p>${message}</p>
    `,
  });
}