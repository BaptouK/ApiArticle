const IDAOArticle = require('../idaoarticle').IDAOArticle;
const Article = require('./article-model');

class DaoarticleMongoose extends IDAOArticle {
    /**
     * Override explicitement dans la classe enfant
     */
    async insert(article){

        const newArticle = new Article(article);

        return await newArticle.save();

    }
    async selectAll(){
        return await Article.find();
    }

    async selectById(id){
        return await Article.findOne({uid: id});
    }

    async delete(uid){
        return await Article.findOneAndDelete(
            {uid: uid },
            {new: true, runValidators: true }
        );
    }

    async update(article){
        return await Article.findOneAndUpdate(
            { uid: article.uid },
            { title: article.title },
            { runValidators: true }
        );
    }

}

module.exports = DaoarticleMongoose;
