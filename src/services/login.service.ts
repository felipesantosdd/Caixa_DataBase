import jwt from 'jsonwebtoken';
import AppDataSource from "../data-source";
import { User } from "../entities/user.entities";
import { AppError } from "../errors/AppError";
import { compare } from 'bcryptjs'
import 'dotenv/config'

export async function loginService({ email, password }) {
    const userRepository = AppDataSource.getRepository(User)

    if (!email || !password) {
        throw new AppError('Por favor, insira um email e uma senha válidos', 400);
    }

    const user = await userRepository.findOneBy({ email: email })

    if (!user) {
        throw new AppError('Email ou password inválido', 401)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
        throw new AppError('Email ou password inválido', 401)
    }

    const token = jwt.sign({ email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: "24h", subject: user.id })

    const userData = {
        userName: user.username,
        email: user.email,
    }

    return { token, userData }
}
