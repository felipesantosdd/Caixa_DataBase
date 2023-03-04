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
