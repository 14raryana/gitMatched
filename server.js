const express = require("express");
const DB = require("./models")

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var session = require("express-session"),
  bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username);
    console.log(password);
    DB.User.findOne({ userName: username }, function(err, user) {
      console.log("db call");
      console.log(user);
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  DB.User.findById(id, function(err, user) {
    done(err, user);
  });
});

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login' }));

app.post('/login', function(req, res, next) {
  console.log("logging in")
  console.log(req.body)
  passport.authenticate('local', function(err, user, info) {
    console.log("Server.js")
    console.log("is authenticating...")
    if (err) { return next(err); }
    if (!user) { return res.json("user not found"); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      console.log(req.user)
      return res.redirect("/home");
    });
  })(req, res, next);
});

app.get('/logout', function(req, res){
  console.log("THIS IS LOGOUT IN THE SERVER")
  req.logout();
  console.log("THIS IS BEFORE THE REDIRECT")
  return res.redirect('/');
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/final_project_attempt_5",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
