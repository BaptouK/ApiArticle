const ArticleService = require ("./article-service");

test('Tester Articles', async() => {

    const test_GetAll = await ArticleService.getAllArticles();
    expect(test_GetAll.code).toBe("200")

    const test_Create = await ArticleService.createArticle({title: "test", content: "test"});
    expect(test_Create.code).toBe("200")

    const test_GetById = await ArticleService.getById(test_Create.data.uid);
    expect(test_GetById.code).toBe("200")

    const test_Update = await ArticleService.updateArticle({uid: test_Create.data.uid, title: "test2", content: "test2"});
    expect(test_Update.code).toBe("200")

    const test_Delete = await ArticleService.deleteArticle(test_Create.data.uid)
    expect(test_Delete.code).toBe("200")

    const test_GetById_NotFound = await ArticleService.getById(test_Create.data.uid);
    expect(test_GetById_NotFound.code).toBe("404")

    const test_Delete_NotFound = await ArticleService.deleteArticle(test_Create.data.uid)
    expect(test_Delete_NotFound.code).toBe("404")

    const test_Update_NotFound = await ArticleService.updateArticle(test_Create.data.uid)
    expect(test_Update_NotFound.code).toBe("404")



})