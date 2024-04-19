import { Router } from "express";
import { CategoriesControllers } from "../controllers/categories.controller.ts";

const router = Router();

router.get(
  "/",
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  CategoriesControllers.get,
);

export default router;
