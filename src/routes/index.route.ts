import { Router } from "express";
import routerProduct from "./products.route";
import routerCategories from "./categories.route";
import { HomeController } from "../controllers/home.controller";

const router = Router();

router.get("/", HomeController.get);

router.use("/product", routerProduct);
router.use("/category", routerCategories);

export default router;
