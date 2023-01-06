import AppDataSource from "../data-source"
import { Registers } from "../entities/registers.entities"

const listRegistersService = async (): Promise<Registers[]> => {
    const registerRepository = AppDataSource.getRepository(Registers)

    const registers = await registerRepository.find()

    return registers

}

export default listRegistersService