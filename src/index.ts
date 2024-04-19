import "dotenv/config";
import config from "./config/config.ts";
import app from "./app.ts";
import { logger } from "./utils/logger.ts";

app.listen(config.PORT, () => logger.info(`listening on port ${config.PORT}`));
