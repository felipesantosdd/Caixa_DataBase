import AppDataSource from "../data-source";
import { User } from "../entities/user.entities";

export async function getUsersService() {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    return users.map(({ password, ...user }) => user)
}