const router = require("express").Router();
const alertPostController = require("../controllers/alertPostController.js");
router
    .route("/")
    .post(alertPostController.postArticle)
    .get(alertPostController.getArticles);

module.exports = router;
