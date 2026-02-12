const IDAOArticle = require('../idaoarticle').IDAOArticle; //
const Article = require('./article-model');

class DaoarticleSequelize extends IDAOArticle {
    /**
     * Crée un nouvel article
     */
    async insert(article) {
        return await Article.create(article);
    }

    /**
     * Récupère tous les articles
     */
    async selectAll() {
        return await Article.findAll();
    }

    /**
     * Récupère un article par UID
     */
    async selectById(uid) {
        return await Article.findOne({ where: { uid } });
    }

    /**
     * Met à jour un article
     */
    async update(article) {
        // Mettre à jour les champs
        const [rowsUpdated] = await Article.update(
            {
                title: article.title,
                desc: article.desc,
                author: article.author,
                imgPath: article.imgPath
            },
            {
                where: { uid: article.uid }
            }
        );

        if (rowsUpdated === 0) return null;

        // Récupérer l'article mis à jour
        const updatedArticle = await Article.findOne({ where: { uid: article.uid } });

        return updatedArticle;
    }


    /**
     * Supprime un article
     */
    async delete(uid) {
        const article = await Article.findOne({ where: { uid } });
        if (!article) return null;

        await article.destroy();
        return article; // renvoie l'article supprimé
    }
}

module.exports = DaoarticleSequelize;
