const mongoose = require("mongoose");

const Article = mongoose.model('Article', {uid : String, desc: String, author: String, imgPath: String, title: String, }, "articles");

module.exports = Article

