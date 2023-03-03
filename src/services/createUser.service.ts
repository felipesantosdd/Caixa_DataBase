import AppDataSource from '../data-source';
import { User } from '../entities/user.entities';
import { AppError } from '../errors/AppError';
import { IUser } from './../interfaces/user.interfaces';

export async function createUserService(user: IUser) {

    const userRepository = AppDataSource.getRepository(User);

    const exist = await userRepository.findOneBy({ email: user.email }) ? true : false;
    if (exist) {
        throw new AppError('User already exists', 400)
    }

    const newUser = userRepository.create(user)

    await userRepository.save(newUser)

    const { password, ...data } = newUser

    return data

}
