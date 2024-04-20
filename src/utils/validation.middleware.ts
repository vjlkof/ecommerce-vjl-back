import { NextFunction, Request, RequestHandler, Response } from "express";
import { AnyZodObject } from "zod";
import { StatusCodes } from "http-status-codes";

export default function validationMiddleware(
  schema: AnyZodObject,
): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    const result = schema.safeParse({
      params: req.params,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      body: req.body,
      query: req.query,
    });
    if (result.success === false) {
      const errorFormatted = result.error.format();
      res.status(StatusCodes.BAD_REQUEST).json(errorFormatted);
    } else {
      next();
    }
  };
}
