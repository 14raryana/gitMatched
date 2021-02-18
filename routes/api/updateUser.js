const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
    .put(usersController.updateUser);

router.route("/like")
    .put(usersController.likeUser)

router.route("/dislike")
    .put(usersController.dislikeUser)

module.exports = router;