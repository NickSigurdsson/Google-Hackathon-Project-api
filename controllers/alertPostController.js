const knex = require("knex")(require("../knexfile"));

exports.postArticle = async (req, res) => {
    try {
        const articleData = await knex("alerts").insert(req.body);
        const newArticleURL = `articles/${articleData[0]}`;
        res.status(201).location(newArticleURL).send(newArticleURL);
    } catch (error) {
        res.status(400).send(`Error creating article: ${error}`);
    }
};

exports.getArticles = async (req, res) => {
    try {
        const articleData = await knex("alerts");
        res.status(200).json(articleData);
    } catch (err) {
        res.send(`Error retrieving data : ${err}`);
    }
};
