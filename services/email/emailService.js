const nodemailer = require('nodemailer');
const ejs = require('ejs');
module.exports = {
  sendEmail: async (obj) => {
    let transporter = nodemailer.createTransport({
      service: 'Mailgun',
      auth: {
        user: '',
        pass: ''
      }
    });
    if (!Array.isArray(obj.to)) {
      obj.to = [obj.to];
    }
    const htmlText = await ejs.renderFile(`${__basedir}${obj.template}/html.ejs`, obj.data);

    return await Promise.all(obj.to.map((emailId) => {
      var mailOpts = {
        from: obj.from || 'noreply@yoyo.co',
        to: emailId,
        subject: obj.subject,
        html: htmlText
      };
      transporter.sendMail(mailOpts, function (err, response) {
        if (err) {
          //ret.message = "Mail error.";
        } else {
          //ret.message = "Mail send.";
        }
      });
    }));
  }
};
