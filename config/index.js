import _ from 'lodash';
import knexfile from './knexfile';

const NODE_ENV = _.defaultTo(process.env.NODE_ENV, 'development');

const isProd = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';
const isDev = NODE_ENV === 'development';

const config = {
  db: knexfile[NODE_ENV],
  env: {
    isDev,
    isProd,
    isTest
  },
  server: {
    port: _.defaultTo(process.env.PORT, 3000),
    host: _.defaultTo(process.env.HOST, 'localhost')
  }
};

export default config;
