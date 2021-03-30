import { transporter } from './utils.js';

const message = {
  from: 'user21@domain.com',
  to: 'receiver@domail.ru',
  subject: 'Message title',
  text: 'Message from nodemailer',
  html: '<h3>Here is the test message was sent by means of nodemailer</h3>',
};

export const sendMail = message => transporter.sendMail(message, err => {
    if (err) return console.log('Error: ', err);
    console.log('Message sent');
});

sendMail(message);
