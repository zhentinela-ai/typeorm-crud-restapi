"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Dorado715#',
    port: 5432,
    database: 'typeormdb',
    entities: [],
    logging: true,
});
