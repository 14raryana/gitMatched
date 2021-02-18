const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
    .get(usersController.findUser)

router.route("/:userName/:password")
    .get(usersController.findUser)

router.route("/startSwipe")
    .get(usersController.startSwipe)

router.route("/matches")
    .get(usersController.userMatches)

router.route("/byId")
    .get(usersController.findUsers)

module.exports = router;