const Article = require('../models/article');

const createArticle = async (title, published, category, writerId) => {
    const article = new Article({
        title : title,
        category: category
    });

    //i have to add writerId from user loged in..

    if (published)
        article.published = published;

    return await article.save();
};

const getArticleById = async (id) => {
    return await Article.findById(id);
};

const getArticles = async () => {
    return await Article.find({});
};

const updateArticle = async (id, title, category) => {
    const article = await getArticleById(id);
    if (!article)
        return null;

    article.title = title;
    article.category = category;
    await article.save();
    return article;
};

const deleteArticle = async (id) => {
    const article = await getArticleById(id);
    if (!article)
        return null;

    await article.remove();
    return article;
};

module.exports = {
    createArticle,
    getArticleById,
    getArticles,
    updateArticle,
    deleteArticle
}