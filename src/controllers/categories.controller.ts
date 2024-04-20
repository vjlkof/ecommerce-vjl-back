import { type Request, type Response, type NextFunction } from "express";
import { CategoriesServices } from "../services/categories.service.js";
import { StatusCodes } from "http-status-codes";

export async function get(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const result = (await CategoriesServices.getData()).data;
    res.status(StatusCodes.OK).json(result);

    next();
  } catch (err) {
    next(err);
  }
}

export const CategoriesControllers = {
  get,
};
