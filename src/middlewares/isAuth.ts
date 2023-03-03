import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import "dotenv/config";

export function isAuthorized(req: Request, res: Response, next: NextFunction) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Invalid Token",
        })
    }

    const splitToken = token.split(" ")[1]

    jwt.verify(splitToken, process.env.SECRET_KEY, (error, decoded: any) => {
        if (error) {
            return res.status(401).json({ message: 'Invalid Token' });
        }

        req.user = {
            id: decoded.sub as string,
            user: decoded.email
        }

        return next()
    })



}