import AppDataSource from "../data-source"
import { Registers } from "../entities/registers.entities"
import { User } from "../entities/user.entities"

const listRegistersService = async (user: any): Promise<Registers[]> => {
    const registerRepository = AppDataSource.getRepository(Registers)

    const registers = await registerRepository.findBy({ userId: user.id })


    const newRegisters = registers.sort((a: any, b: any) => a.date - b.date);

    return newRegisters

}

export default listRegistersService