import { IRegisters } from './../interfaces/registers.interfaces';
import { Request, Response } from "express";
import createRegisterService from '../services/createRegister.service';
import listRegistersService from '../services/listRegisters.service';
import deleteRegisterService from '../services/deleteRegister.service';

const createRegistersController = async (req: Request, res: Response) => {
    const registersData: IRegisters = req.body
    const newRegister = await createRegisterService(registersData)


    console.log(newRegister)
    return res.status(201).json(newRegister)
}

const listRegistersController = async (req: Request, res: Response) => {
    const registers = await listRegistersService()

    return res.status(200).json(registers)
}

const deleteRegisterController = async (req: Request, res: Response) => {
    const status = await deleteRegisterService(req.params.id)

    return res.status(status).json()
}

export { createRegistersController, listRegistersController, deleteRegisterController }