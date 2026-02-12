module.exports = {

    getDAOArticle : () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "sequelize") {
            const DAOArticleSequelize = require("./sequelize/daogame-sequelize");
            return new DAOArticleSequelize();
        }
        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOArticleMongoose = require("./mongoose/daogame-mongoose");
            return new DAOArticleMongoose();
        }
    }
}