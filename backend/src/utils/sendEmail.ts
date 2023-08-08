import * as nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendCodeEmail(email:string, username: string, code:string): Promise<void> {
  await transport.sendMail({
    from: 'RARP@allexpress.com',
    to: email,
    subject: 'Activation Code',
    html: `<h1>Welcome to RARP, ${username}</h1>
    <p>Please access this page to activate your account: ${code}</p>`,
  });
}