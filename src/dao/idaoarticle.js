class IDAOArticle {
    async insert(article) {};
    async selectAll() {};
    async selectById(uid) {};
    async update(article) {}
    async delete(uid) {};
}

module.exports.IDAOArticle = IDAOArticle;
