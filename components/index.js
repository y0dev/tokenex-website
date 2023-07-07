const viewRouter = require("./view/view.routes");
const logger = require("../utils/logger").logger;

exports.registerApiRoutes = (app, prefix) => {
  logger.info("Registering API routes");
  app.use("", viewRouter);
};
