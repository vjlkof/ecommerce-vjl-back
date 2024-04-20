import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controller.js";
import validationMiddleware from "../utils/validation.middleware.js";
import {
  usersSchemaGet,
  usersSchemaGetOne,
} from "../schemas/products.schema.js";

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
