import { IRegisters } from "../interfaces/registers.interfaces"
import AppDataSource from "../data-source";
import { Registers } from "../entities/registers.entities";
import { User } from "../entities/user.entities";

const createRegisterService = async (userData: IRegisters, userId: any) => {

    const registerRepository = AppDataSource.getRepository(Registers)
    const userRepository = AppDataSource.getRepository(User)

    const registerData = {
        description: userData.description,
        date: userData.date,
        value: userData.value,
        type: userData.type,
        payment: userData.payment,
        user: await userRepository.findOneBy({ id: userId.id })
    }

    const register = registerRepository.create(registerData)

    await registerRepository.save(register)

    const { user, ...data } = register

    return data
}

export default createRegisterService