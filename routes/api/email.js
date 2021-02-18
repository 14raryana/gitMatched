// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "14raryana@gmail.com",
//         pass: "Farvardin81376"
//     }
// });

// const options = {
//     from: "14raryana@gmail.com",
//     to: "jiyoad@gmail.com",
//     subject: "sending email with node",
//     text: "AHHHHHHHH YAAAAAAA!!!!!!!!!!!"
// };

// transporter.sendMail(options, function(err, info) {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("Sent: " + info.response);
// })






// const router = require("express").Router();
// const usersController = require("../../controllers/usersController");

// router.route("/")
//     .get(usersController.emailUser)

// module.exports = router;