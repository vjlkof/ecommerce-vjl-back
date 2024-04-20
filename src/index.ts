import "dotenv/config";
import config from "./config/config.js";
import app from "./app.js";
import { logger } from "./utils/logger.js";

app.listen(config.PORT, () => logger.info(`listening on port ${config.PORT}`));
