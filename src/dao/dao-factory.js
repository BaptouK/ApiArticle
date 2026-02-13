const DAOArticleMock = require("./mock/daoarticle-mock");
module.exports = {

    /**
     * Retourne un IDAOGame
     */
    getDAOArticle : () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "mysql") {
            const DAOArticleSequelize = require("./sequelize/daoarticle-sequelize");
            return new DAOArticleSequelize();
        }
        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOArticleMongoose = require("./mongoose/daoarticle-mongoose");
            return new DAOArticleMongoose();
        } else if (process.env.BDD_MODE === "mock") {
            const DAOArticleMock = require("./mock/daoarticle-mock");
            return new DAOArticleMock();
        }
        // Fallback : par défaut car les tests utitaire ne chargent pas les variables d'environnement
        const DAOArticleMock = require("./mock/daoarticle-mock");
        return new DAOArticleMock();
    }
}