const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
    .delete(usersController.delete)

module.exports = router;
