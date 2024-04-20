import { type Request, type Response, type NextFunction } from "express";
import { ProductsServices } from "../services/products.service.js";
import { StatusCodes } from "http-status-codes";

export async function get(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const filterSearchQuery = req.query;

    const result = (await ProductsServices.getData(filterSearchQuery)).data;
    res.status(StatusCodes.OK).json(result);

    next();
  } catch (err) {
    next(err);
  }
}

export async function getOne(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const id: string = req.params.id;
    const result = (await ProductsServices.getOneData(Number(id))).data;
    if (!result) {
      res.status(StatusCodes.NOT_FOUND).json({});
    } else {
      res.status(StatusCodes.OK).json(result);
    }
    next();
  } catch (err) {
    next(err);
  }
}

export const ProductsControllers = {
  get,
  getOne,
};
