import { IUserAuth } from './../interfaces/user.interfaces';
import { IRegisters } from './../interfaces/registers.interfaces';
import { Request, Response } from "express";
import createRegisterService from '../services/createRegister.service';
import listRegistersService from '../services/listRegisters.service';
import deleteRegisterService from '../services/deleteRegister.service';

const createRegistersController = async (req: Request, res: Response) => {
    try {
        const user = req.user
        const registersData: IRegisters = req.body
        const newRegister = await createRegisterService(registersData, user)

        return res.status(201).json(newRegister)

    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error.message })
    }
}

const listRegistersController = async (req: Request, res: Response) => {
    const user = req.user
    const registers = await listRegistersService(user)

    return res.status(200).json(registers)
}

const deleteRegisterController = async (req: Request, res: Response) => {
    const user: any = req.user
    try {
        const status = await deleteRegisterService(req.params.id, user)

        return res.status(status).json()

    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error.message })
    }

}

export { createRegistersController, listRegistersController, deleteRegisterController }