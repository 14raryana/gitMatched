const router = require("express").Router();
const createUserRoute = require("./createUser");
const getUser = require("./getUser");
const deleteUser = require("./deleteUser");
const updateUser = require("./updateUser");
// const emailUser = require("./email");

router.use("/createUser", createUserRoute);

router.use("/getUser", getUser);

router.use("/deleteUser", deleteUser);

router.use("/updateUser", updateUser);

// router.use("/email", emailUser)

module.exports = router;