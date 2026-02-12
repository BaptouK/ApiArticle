module.exports = {

    /**
     * Retourne un IDAOGame
     */
    getDAOArticle : () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "mysql") {
            const DAOGameSequelize = require("./sequelize/daoarticle-sequelize");
            return new DAOGameSequelize();
        }
        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOGameMongoose = require("./mongoose/daoarticle-mongoose");
            return new DAOGameMongoose();
        }
    }
}