import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import { loginService } from "../services/login.service";

export async function loginController(req: Request, res: Response) {
    try {
        const loginData = req.body
        const data = await loginService(loginData)

        return res.status(200).json({ data })

    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error.message })
    }
}


export async function tokenValidation(req: Request, res: Response) {
    const code = req.headers['authorization'];
    const secretKey = process.env.SECRET_KEY



    try {

        const token = code.split(' ')[1]
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(401).json({ auth: false, message: "Falha ao autenticar o Token" })
            } else {
                return res.status(200).json({ message: "Altorizado" })
            }
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }




}
