import config from '../config';
import db from '../knex';

const dbMiddleware = app => {
  app.db = db;
  let promise;

  if (!config.env.isTest) {
    app.migration = true;
    promise = db.migrate.latest().then(() => {
      app.migration = false;
    }, console.error);
  }

  return async function(req, res, next) {
    if (app.migration && promise) {
      await promise;
    }

    return next();
  };
};

export default dbMiddleware;
