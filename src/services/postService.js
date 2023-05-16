const { User, BlogPost, Category } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  console.log('title service', title);
  console.log('content service', content);
  console.log('categoryIds service', categoryIds);
  console.log('user id service', userId);
    const categories = await Category.findAll({ where: { id: categoryIds } });
    console.log('categories service', categories);
    
    const post = await BlogPost.create({ 
      title, content, userId, updated: new Date(), published: new Date() });
    console.log('ahooy', post);
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      userId: post.userId,
      updated: post.updatedAt,
      published: post.createdAt,
    };
};

const findAllService = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password', 'PostCategory'] } }, 
    { model: Category, as: 'categories' }],
});

module.exports = { createPost, findAllService };
