const db = require("../models");

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
    var updatedIdsArray = req.user.likedIds
    console.log("THIS IS THE TEST ARRAY IN LIKE USER FUNCTION")
    var updatedKey = (Object.keys(req.body));
    var updatedValue = req.body.likedIds
    updatedIdsArray.push(updatedValue);
    // console.log(updatedIdsArray)
    console.log(updatedIdsArray)
    console.log("THIS IS THE REQ IN THE LIKE USER FUNCTION IN CONTROLLER")

    db.User.findOneAndUpdate({userName: req.user.userName}, {[updatedKey]: updatedIdsArray}, {new: true})
      .then((response) => {
        console.log(response);
        console.log("THIS IS THE RESPONSE AFTER DB UPDATE")
        console.log(req.user)
        res.json(req.user);
      })
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
  }

};