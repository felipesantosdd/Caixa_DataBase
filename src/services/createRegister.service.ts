import { IRegisters } from "../interfaces/registers.interfaces"
import AppDataSource from "../data-source";
import { Registers } from "../entities/registers.entities";

const createRegisterService = async (userData: IRegisters): Promise<Registers> => {
    const registerRepository = AppDataSource.getRepository(Registers)

    const register = registerRepository.create(userData)

    await registerRepository.save(register)

    return register
}

export default createRegisterService