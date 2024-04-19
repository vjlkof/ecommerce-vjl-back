import "dotenv/config";
import config from "./config/config";
import app from "./app";
import { logger } from "./utils/logger";

app.listen(config.PORT, () => logger.info(`listening on port ${config.PORT}`));
