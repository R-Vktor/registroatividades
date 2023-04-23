import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Esta estratégia vai mandar o app que contem o 'request e o response' para o arquivo de rotas e dentro dele vai ser encaminhado para a rota pertinente e posteriormente para o controller pertinente.
routes(app);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('Server is running');
});
