const express = require("express");
const router = express.Router();
const articleService = require('../services/article-service');

router.get("/getArticles", async (request, response) => {
    const unObjet = await articleService.getALlArticles();
    return response.json({code: "200", message: "Listes de tout les articles", data: unObjet});
});

router.post("/createArticle", async (request, response) => {
    const data = request.body;
    //console.log(data);

    const servicesResponse = await articleService.createArticle(data);
    return response.json(servicesResponse);
});

router.delete("/deleteArticle/:uid", async (request, response) => {
    const uid = request.params.uid;
    const servicesResponse = await articleService.deleteArticle(uid);
    return response.json(servicesResponse);
});

router.get("/article/:uid", async (request, response) => {
    const uid = request.params.uid;
    const servicesResponse = await articleService.getById(uid);
    return response.json(servicesResponse);
})

router.post("/updateArticle", async (request, response) => {
    const data = request.body;
    const servicesResponse = await articleService.updateArticle(data);
    return response.json(servicesResponse);
})
module.exports = router;

