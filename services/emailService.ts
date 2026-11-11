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

const escape = (text: string) =>
  String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

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
      `Portfolio Contact: ${String(subject).replace(/[\r\n]+/g, " ").slice(0, 150)}`,
    replyTo: email,
    html: `
      <h2>New Portfolio Message</h2>

      <p><b>Name:</b> ${escape(name)}</p>

      <p><b>Email:</b> ${escape(email)}</p>

      <p><b>Message:</b></p>

      <p style="white-space:pre-wrap">${escape(message)}</p>
    `,
  });
}