import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import db from './middleware/dbMiddleware';
import routes from './routes';
import config from './config';

const app = express();

app.use(db(app));
app.use(cors());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.listen(config.server.port, () => {
  console.log(`Listening on port: ${config.server.port}`);
});
