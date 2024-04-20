import { Router } from "express";
import routerProduct from "./products.route.js";
import routerCategories from "./categories.route.js";
import { HomeController } from "../controllers/home.controller.js";

const router = Router();

router.get("/", HomeController.get);

router.use("/product", routerProduct);
router.use("/category", routerCategories);

export default router;
