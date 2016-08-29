module.exports = (express, models) => {
  const apiRouter = express.Router();

  require('glob').sync('!(node_modules)/**/routes').forEach((path) => {
    console.log(path);
    require('../'+path)(apiRouter, models);
  });

  return apiRouter;
}
