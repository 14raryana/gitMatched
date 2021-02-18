const db = require("../models");
const nodemailer = require("nodemailer");

module.exports = {
  create: function (req, res) {
    console.log(req.body)
    console.log("-------------------LINE 7--------------------");
    db.User.create(req.body).then((user) => {
      console.log(user);
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        console.log(req.user)
        res.json(user)
      });
      console.log("This is the end, it worked!!!!!");
    })
  },

  findUser: async function (req, res) {

    console.log("THIS IS BOTTOM OF REQ.PARAMS IN USERS CONTROLLER");
    console.log(req.user);
    db.User.find({ userName: req.user.userName })
      .then(async (dbModel) => {
        console.log(dbModel);
        console.log("hello")
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));

  },

  delete: async function (req, res) {
    console.log(req.body)
    db.User.deleteOne({ userName: req.body.userName })
      .then(async (res) => {
        console.log(res);
        console.log("THIS IS THE RESPONSE OF THE DATABASE AFTER DELETE");
        res.json(res);
      }).catch((err) => {
        console.log(err);
      })
  },

  startSwipe: async function (req, res) {
    console.log(req.user.requiredPosition)
    console.log("THIS IS THE STARTSWIPE FUNCTION IN USERSCONTROLLER")
    db.User.find({ jobTitle: req.user.requiredPosition })
      .then(async (response) => {
        var data = {
          suggestedUsers: response,
          currentUser: req.user
        }
        res.json(data);
      })

  },

  updateUser: async function(req, res) {
    var updatedKey = (Object.keys(req.body)[0]);
    var updatedValue = Object.values(req.body)[0];

    db.User.updateOne({userName:req.user.userName}, {[updatedKey]: updatedValue})
      .then(async (response) => {
        console.log(response);
        console.log("THIS IS THE RESPONSE FROM THE DB.USER.UPDATEONE");
      })
  },

  likeUser: async function(req, res) {
    console.log(req.user);
    console.log(req.body)
    console.log(req.user.unRead)
    console.log("THIS IS THE UNREAD NUMBER IN REQ.USER")
    var updatedIdsArray = req.user.likedIds
    console.log("THIS IS THE TEST ARRAY IN LIKE USER FUNCTION")
    var updatedKey = (Object.keys(req.body));
    var updatedValue = req.body.likedIds
    updatedIdsArray.push(updatedValue);
    // console.log(updatedIdsArray)
    console.log(updatedIdsArray)
    console.log("THIS IS THE REQ IN THE LIKE USER FUNCTION IN CONTROLLER")
    var unReadKey = "unRead";
    var unReadValue = req.user.unRead++;
    console.log(unReadValue);
    console.log("UNREAD VALUE IN CONTROLLER")

    db.User.findOneAndUpdate({userName: req.user.userName}, {[updatedKey]: updatedIdsArray, unRead: req.user.unRead++}, {new: true})
    .then((response) => {
      console.log(response);
      console.log("THIS IS THE RESPONSE FOR");
      res.json(req.user);
    })

    // db.User.findOneAndUpdate({userName: req.user.userName}, {"$set": {[updatedKey]: updatedIdsArray, "unRead": unRead++}}, {new: true})
    //   .then((response) => {
    //     console.log(response);
    //     console.log("THIS IS THE RESPONSE AFTER DB UPDATE")
    //     console.log(req.user)
    //     res.json(req.user);
    //   })
  },

  addUnread: async function(req, res) {
    console.log(req)
    console.log("THIS IS THE ADD UNREAD FUNCTION IN CONTROLLER");
    // db.User.findOneAndUpdate({userName})
  },

  dislikeUser: async function(req, res) {
    // console.log(req.user);
    // console.log(req.body);
    // console.log("THIS IS DISLIKE USER FUNCTION")
    var updatedIdsArray = req.user.dislikedIds
    var updatedKey = (Object.keys(req.body));
    var updatedValue = req.body.dislikedIds
    updatedIdsArray.push(updatedValue)
    console.log(updatedKey)
    console.log(updatedValue)
    console.log("THESE ARE UPDATED KEYS AND VALUES IN DISLIKE USER FUNCTION")

    db.User.findOneAndUpdate({userName: req.user.userName}, {[updatedKey]: updatedIdsArray}, {new: true})
    .then((response) => {
      console.log(response);
      console.log("THIS IS THE RESPONSE AFTER DB UPDATE")
      console.log(req.user)
      res.json(req.user);
    })
    
  },

  notifyUser: async function(req, res) {
    console.log("THIS IS THE NOTIFY USER FUNCTION IN THE CONTROLLER")
  },

  userMatches: async function(req, res) {
    res.json(req.user.likedIds)
  },

  findUsers: async function(req, res) {
    var users = [];
    var promises = [];
    const likedIds = Object.values(req.query);


    db.User.find({_id: {$in: likedIds}}).then((response) => {
      console.log("============================")
      console.log("THIS IS THE RESPONSE IN FIND USERS CONTROLLER");
      console.log(response);
      console.log("============================")
      
      res.json(response)
    }).catch((err) => {
      console.log(err);
    })
  },

  view: async function(req, res) {
    console.log(req);
    console.log("THIS IS THE REQ IN THE CONTROLLER")
    
    // db.User.findOneAndUpdate({userName: req.user.userName}, {[updatedKey]: updatedIdsArray, unRead: req.user.unRead++}, {new: true})
    // .then((response) => {
    //   console.log(response);
    //   console.log("THIS IS THE RESPONSE FOR");
    //   res.json(req.user);
    // })
    // console.log(req.user.unRead--);
    if(req.user.unRead > 0) {
      console.log("UN READ IS GREATER THAN 0")
      var unReadUpdate = req.user.unRead - 1
      console.log(unReadUpdate)
    }

    else {
      console.log("UN READ IS LESS THAN 0")
      var unReadUpdate = req.user.unRead;
    }
    console.log(unReadUpdate);
    console.log("THIS IS THE UN READ UPDATE")
    // console.log("THIS IS THE REQ.USER.UNREAD IN VIEW CONTROLLER");




    db.User.findOneAndUpdate({userName: req.user.userName}, {unRead: unReadUpdate}, {new: true})
    .then((response) => {
      // console.log(response);
      // console.log("THIS IS THE RESPONSE IN THE VIEW FUNCTION CONTROLLER")
      res.json(req.user);
    })
  },

  // emailUser: async function(req, res) {
    // window.open("mailto:14raryana@gmail.com");
    // console.log("THIS IS THE EMAIL USER FUNCTION IN CONTROLLER")

    // const transporter = nodemailer.createTransport({
    //     service: "smtp.gmail.com",
    //     // port: 587,
    //     // secure: false,
    //     // requireTLS: true,
    //     auth: {
    //         user: "cheryltiegs528@gmail.com",
    //         pass: "Farvardin81376"
    //     }
    // });

    // const options = {
    //     from: "cheryltiegs528@gmail.com",
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
  // }

};