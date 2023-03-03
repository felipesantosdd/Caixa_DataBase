import { response } from "express";
import AppDataSource from "../data-source";
import { Registers } from "../entities/registers.entities";
import { IUserAuth } from "../interfaces/user.interfaces";

const deleteRegisterService = async (iid: any, user: IUserAuth) => {
    const registerRepository = AppDataSource.getRepository(Registers)

    const register = await registerRepository.findOneBy({ id: iid })

    if (register.userId !== user.id) {
        return 401
    }

    await registerRepository.remove(register)

    return 204
}

export default deleteRegisterService