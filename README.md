# EN:

# Trybers And Dragons Project


## What was developed?
For this project, an API and a database were developed for content production for a blog! To achieve this, it should use Node.js with the sequelize package to perform CRUD operations on posts.

In this project, you will:

Develop endpoints connected to your database following REST principles.
Handle the user and post relationship, as posting requires user authentication and login.
Handle the post to categories and categories to posts relationship, as categories will be used for posts.

## What do I need to know to do the project?

- Understand the concept of Migrations.
- Understand the concept of Models.
- Understand the concept of Seeders.
- Understand 1:N relationships.
- Understand N:N relationships.
- Understand how to create a route with JWT authentication.

## Mandatory Project Requirements

- 1 Create migrations for the users, categories, blog_posts, and posts_categories tables.
- 2 Create the User model in src/models/User.js with the correct properties.
- 3 Your application should have the POST /login endpoint.
- 4 Your application should have the POST /user endpoint.
- 5 Your application should have the GET /user endpoint.
- 6 Your application should have the GET /user/:id endpoint.
- 7 Create the Category model in src/models/Category.js with the correct properties.
- 8 Your application should have the POST /categories endpoint.
- 9 Your application should have the GET /categories endpoint.
- 10 Create the BlogPost model in src/models/BlogPost.js with the correct properties and associations.
- 11 Create the PostCategory model in src/models/PostCategory.js with the correct properties and associations.
- 12 Your application should have the POST /post endpoint.
- 13 Your application should have the GET /post endpoint.
- 14 Your application should have the GET /post/:id endpoint.
- 15 Your application should have the PUT /post/:id endpoint.

## Bonus Requirements

- 16 Your application should have the DELETE /post/:id endpoint.
- 17 Your application should have the DELETE /user/me endpoint.
- 18 Your application should have the GET /post/search?q=:searchTerm endpoint.

## To run the project, you need to:

> Run the `node` and `db` services using the command `docker-compose up -d --build`

### After the Docker containers have started, enter the command:

> `docker exec -it blogs_api bash`.





# PT-BR:
# Projeto Trybers And Dragons


## O que foi desenvolvido?
Para esse projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog! Para isso, ela deverá usar Node.js se valendo do pacote sequelize para fazer um CRUD de posts.

Neste projeto você irá:

Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
Trabalhar a relação user e post, visto que para fazer um post é necessário usuário e login
Trabalhar a relação de posts para categories e de categories para posts, visto que será necessária a utilização categorias para os posts.


## O que preciso saber para fazer o projeto?

- Entender o conceito de Migrations
- Entender o conceito de Model
- Entender o conceito de Seeders
- Entender relacionamentos 1:N
- Entender relacionamentos N:N
- Entender como criar uma rota com JWT

## Requisitos obrigatórios do Projeto

- 1 Crie migrations para as tabelas users, categories, blog_posts, posts_categories
- 2 Crie o modelo User em src/models/User.js com as propriedades corretas
- 3 Sua aplicação deve ter o endpoint POST /login
- 4 Sua aplicação deve ter o endpoint POST /user
- 5 Sua aplicação deve ter o endpoint GET /user
- 6 Sua aplicação deve ter o endpoint GET /user/:id
- 7 Crie o modelo Category em src/models/Category.js com as propriedades corretas
- 8 Sua aplicação deve ter o endpoint POST /categories
- 9 Sua aplicação deve ter o endpoint GET /categories
- 10 Crie o modelo BlogPost em src/models/BlogPost.js com as propriedades e associações corretas
- 11 Crie o modelo PostCategory em src/models/PostCategory.js com as propriedades e associações corretas
- 12 Sua aplicação deve ter o endpoint POST /post
- 13 Sua aplicação deve ter o endpoint GET /post
- 14 Sua aplicação deve ter o endpoint GET /post/:id
- 15 Sua aplicação deve ter o endpoint PUT /post/:id

## Requisitos Bônus

- 16 Sua aplicação deve ter o endpoint DELETE /post/:id
- 17 Sua aplicação deve ter o endpoint DELETE /user/me
- 18 Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm

## Para rodar o projeto você precisa:

 >Rodar os serviços `node` e `db` com o comando `docker-compose up -d --build`
 
 ### Após o docker ter subido, entre com o comando:
 
  > `docker exec -it blogs_api bash`.

  <br><br><br>
# Qualquer dúvida me contate abaixo.



## :phone: Contact:
<section>
  <p
    align="center"
    style="background-color:#f5f5f5"
    class="connection-container">
    <a
      href="https://www.linkedin.com/in/bruno-m-souza/" target="_blank"
    >
      <img
        align="center"
        src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
        alt="linkedin"
      />
    </a>
    <a
      href="mailto:bmsouza88@gmail.com"
      target="_blank"
    >
      <img
        align="center"
        src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
        alt="email"
      />
    </a>
  </p>
</section>
