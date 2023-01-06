import 'reflect-metadata'
import 'dotenv/config'
import path from 'path'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB,
    synchronize: false,
    logging: true,
    entities: [path.join(__dirname, './entities/**.{js,ts}')],
    migrations: [path.join(__dirname, './migrations/**.{js,ts}')]
})

export default AppDataSource

