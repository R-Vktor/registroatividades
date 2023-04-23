import { create } from '../controllers/user.controller';

// aqui na rota '/user' será chamada a funcao de criaação de usuario que está no
// controller que é responsável por fazer a comunicacao com o banco de dados.


// neste ponto as rotas serao definidas de uma forma diferente do padarao adotado ate hoje
// vamos fazer uma funcao ja sendo exportada e recebendo a instancia do express
// que por padrao recebe primeiro as requisicoes e dentro da funcao
// vai ficar o tipo da rota sendo acessada diretamente de 'app'

const userRoutes = (app: any) => {
  // aqui dentro temos os endPoints e a funcionalidade que vai ser acessada através deles.
  app.post('/user', create);


}

export default userRoutes;
