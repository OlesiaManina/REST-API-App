const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
    const email = {...data, from: 'maninaolesya@gmail.com'};
    await sgMail.send(email);
    console.log('Email sent');
    return true;
}

module.exports = sendEmail;

// const msg = {
//   to: 'kemixi9144@touchend.com',
//   from: 'maninaolesya@gmail.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent');
//   })
//   .catch(error => {
//     console.error(error);
//   });