import { IUser } from './../interfaces/user.interfaces';
import { Request, Response } from 'express';
import { createUserService } from '../services/createUser.service';
import { getUsersService } from '../services/getUsers.service';

export async function createUserController(req: Request, res: Response) {

    try {
        const user: IUser = req.body

        const newUser = await createUserService(user)

        return res.status(201).json({ newUser })

    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error.message })
    }

}

export async function getUsersController(req: Request, res: Response) {
    const users = await getUsersService()

    return res.status(200).json({ users })

}