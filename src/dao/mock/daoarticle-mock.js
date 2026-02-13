const IDAOArticle = require("../idaoarticle").IDAOArticle;

let Articles = [
    {
        "uid": "92286f25-812d-4e3c-83e1-9fb195591918",
        "desc": "BLABLABLABLA",
        "author": "Tom pere ",
        "imgPath": "https://upload.wikimedia.org/wikipedia/commons/5/53/Shadow_2752.jpg",
        "title": "bonjour ",
    },
];


class DaoarticleMock extends IDAOArticle {

    async insert(article) {
        Articles.push(article);
        return article;
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return Articles;
    }

    async selectById(uid) {
        for (let article of Articles) {
            if (article.uid === uid) {
                return article;
            }
        }
        return null;
    };

    async update(article) {
        for (let i = 0; i < Articles.length; i++) {
            if (Articles[i].uid === article.uid) {
                Articles[i] = article;
                return article;
            }
        }
    }

    async delete(uid) {
        for (let i = 0; i < Articles.length; i++) {
            if (Articles[i].uid === uid) {
                const deletedArticle = Articles[i];
                Articles.splice(i, 1);
                return deletedArticle;
            }
        }
        ;
    }
}

module.exports = DaoarticleMock;