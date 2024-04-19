import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controller.ts";
import validationMiddleware from "../utils/validation.middleware.ts";
import {
  usersSchemaGet,
  usersSchemaGetOne,
} from "../schemas/products.schema.ts";

const router = Router();

router.get(
  "/",
  [validationMiddleware(usersSchemaGet)],
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  ProductsControllers.get,
);
router.get(
  "/:id",
  [validationMiddleware(usersSchemaGetOne)],

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  ProductsControllers.getOne,
);

export default router;
