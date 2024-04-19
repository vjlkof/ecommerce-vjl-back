import express from "express";
import router from "./routes/index.route";
import loggerMiddleware from "./utils/logger";
import errorMiddleware from "./utils/errorMiddleware";
import helmet from "helmet";
import cors from "cors";

const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(loggerMiddleware);
app.use(errorMiddleware);

export default app;
