import 'reflect-metadata'
import 'dotenv/config'
import path from 'path'
import { DataSource, DataSourceOptions } from 'typeorm'

const setDataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
    const migrationsPath: string = path.join(
        __dirname,
        "./migrations/**.{js,ts}"
    );

    const nodeEnv = process.env.NODE_ENV;

    if (nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [entitiesPath],
            migrations: [migrationsPath],
        };
    }

    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath],
        };
    }

    return {
        type: "postgres",
        host: process.env.PGHOST,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: parseInt(process.env.PGPORT),
        database: process.env.DB,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath],
    };
};

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);


// const AppDataSource = new DataSource({
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: parseInt(process.env.DB_PORT),
//     database: process.env.DB,
//     synchronize: false,
//     logging: true,
//     entities: [path.join(__dirname, './entities/**.{js,ts}')],
//     migrations: [path.join(__dirname, './migrations/**.{js,ts}')]
// })

// export default AppDataSource

