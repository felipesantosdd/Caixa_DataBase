import AppDataSource from "../data-source";
import { Registers } from "../entities/registers.entities";

const deleteRegisterService = async (iid) => {
    const registerRepository = AppDataSource.getRepository(Registers)

    const register = await registerRepository.findOneBy({ id: iid })
    await registerRepository.remove(register)

    return 204
}

export default deleteRegisterService