/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import * as express from 'express';

 import { MongoClient } from 'mongodb';

 import * as cors from 'cors';

 import { json } from 'body-parser';

 import { router as authRoute } from './app/routes/auth';
 import { router as atendimentosRoute } from './app/routes/atendimento';
 import { requireJwtToken } from './app/midlewares/jwt';

 MongoClient.connect(
   'mongodb://angular-projeto_devcontainer_db_1:27017'
 ).then((client: MongoClient) => {
   app.locals.db = client.db('app-projeto');
   console.log('Conectado ao MongoDB')
 }).catch(err => {
   console.log('Erro ao conectar: ', err);
 })

 const app = express();

 app.use(cors());

 app.use(json());

 app.get('/api', (req, res) => {
   res.send({ message: 'Welcome to api!' });
 });

 app.use('/api/auth', authRoute);

 // ---------- Daqui para baixo, exige token! ----------

 app.use(requireJwtToken);

 app.use('/api/atendimentos', atendimentosRoute);

 const port = process.env.port || 3333;
 const server = app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}/api`);
 });
 server.on('error', console.error);
