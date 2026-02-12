const {v4: uuidv4} = require('uuid');
const DAOFactory = require('../dao/dao-factory');
const {makeService} = require("./service-helper");


module.exports = {
    getALlArticles: async () => {
        const allArticles = await DAOFactory.getDAOArticle().selectAll();
        return allArticles;
    },

    createArticle: async (article) => {
        const generatedUuid = uuidv4();
        article = {...article, uid: generatedUuid};
        const newArticle = await DAOFactory.getDAOArticle().insert(article);
        return makeService("200", "Jeu créer ", newArticle);
    },

    deleteArticle: async (uid) => {
        const deletedArticle = await DAOFactory.getDAOArticle().delete(uid);
        if (deletedArticle == null) {
            return makeService("404", "Jeu non trouvé ", null);
        }

        return makeService("200", "Jeu supprimer ", deletedArticle);
    },

    getById: async (uid) => {
        const article = await DAOFactory.getDAOArticle().selectById(uid);
        if (article == null) {
            return makeService("404", "Jeu non trouvé ", null);
        }
        return makeService("200", "Jeu trouvé ", article);
    },

    updateArticle: async (article) => {
        const updatedArticle = await DAOFactory.getDAOArticle().update(article);
        if (updatedArticle == null) {
            return makeService("404", "Jeu non trouvé ", null);
        }
        return makeService("200", "Jeu supprimer ", updatedArticle);

    }


}