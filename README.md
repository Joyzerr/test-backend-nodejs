a API em questão foi desenvolvida baseada nas user stories definidas.
Temos como foco principal a manipulação dos models Category.js e Product.js através dos controllers CategoryController e ProductController criados.
Assim como desejado nas user stories, nosso produto possui um título, descrição, preço e categoria. Fiz a categoria como outro módulo ja pensando
em outra user storie, pois seria necessário que tivéssemos a viabilidade de pesquisar um produto por seu nome ou categoria específica.

temos também alguns tratamentos de exceções realizados, como por exemplo, através da criação de uma Schema que impossibilita que sejam enviados dados não preenchidos.

endpoints:
POST /products - recebe title(String), description(String), price(Number) e category(ObjectID);
retorna um produto cadastrado caso este seja cadastrado com sucesso, ou um erro.
GET /products - retorna todos os produtos cadastrados.
GET /products - retorna os produtos filtrados pelos parametros que vem da query.
PUT /products - possibilita a edição dos produtos já cadastrados.
DELETE /products - exclui um produto baseado no id que é passado.

POST /categories - recebe title(String) e description (String), retornando uma category cadastrada ou se caso haja falha, um erro.
GET /categories - retorna todos as categorias cadastradas.
GET /categories - retorna as categories filtradas pelos parametros oriundos da query.
PUT /categories - possibilita a edição das categorias cadastradas.
DELETE /categories - exclui uma category baseado no id passado.
