import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export function handleError(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    console.error(err); // log error para fins de depuração

    return res.status(500).json({ message: 'Erro interno do servidor' });
}


