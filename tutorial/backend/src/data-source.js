import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "1234",
    database: "test",
    synchronize: true,
    logging: true,
    entities: ["src/entity/*.js"],
    subscribers: [],
    migrations: [],
})
