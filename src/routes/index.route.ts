import { Router } from "express";
import routerProduct from "./products.route.ts";
import routerCategories from "./categories.route.ts";
import { HomeController } from "../controllers/home.controller.ts";

const router = Router();

router.get("/", HomeController.get);

router.use("/product", routerProduct);
router.use("/category", routerCategories);

export default router;
