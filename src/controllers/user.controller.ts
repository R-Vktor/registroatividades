// como estamos trabalhando com o typeScript precisamos definir os tipo do request e do response, padrao o express ja diponibiliza.
import { Request, Response } from 'express';


// quando temo um bloco de chamadas a serviços externos abrimos o 'async' e tudo que estiver dentro dele usaremos o await em cada chamada o um servico externo
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const create = async (req: Request, res: Response) => {
  try {
    await userValidation.validate(req.body);
    res.status(200).send('Usuario criado com sucesso');
  } catch (error) {
    res.status(404).send(`Erro na criacao do usuario ${error}`);
  }
}
