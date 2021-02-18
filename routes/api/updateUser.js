const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
    .put(usersController.updateUser);

router.route("/like")
    .put(usersController.likeUser)

router.route("/dislike")
    .put(usersController.dislikeUser)

router.route("/addUnread")
    .put(usersController.addUnread)

router.route("/view")
    .put(usersController.view)

module.exports = router;