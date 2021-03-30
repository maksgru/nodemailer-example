import nodemailer from 'nodemailer';

const transport = {
    service: 'gmail',
    auth: {
        user: 'user21@domain.com',
        pass: 'password'
    },
    tls: {
        rejectUnauthorized: false
      }
};

export const transporter = nodemailer.createTransport(transport);
