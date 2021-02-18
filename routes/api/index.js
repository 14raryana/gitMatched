const router = require("express").Router();
const createUserRoute = require("./createUser");
const getUser = require("./getUser");
const deleteUser = require("./deleteUser");
const updateUser = require("./updateUser");

router.use("/createUser", createUserRoute);

router.use("/getUser", getUser);

router.use("/deleteUser", deleteUser);

router.use("/updateUser", updateUser);

module.exports = router;