import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import db from './middleware/db-middleware';
import routes from './routes';

const PORT = process.env.PORT || 3001;
const knex = require('./knex');
const app = express();

app.use(db(app));
app.use(cors());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/tasks', (req, res) => {
  // use the knex variable above to create dynamic queries
});

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
