import { NextFunction, Request, Response } from "express";

export const cors = (req: Request, res: Response, next: NextFunction) => {

    console.log('chegou no middleware');

    next()

}