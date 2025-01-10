"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const postgresProfile = new pg_1.Pool({
    connectionString: 'postgresql://admin:qnahbhB9CWZrBlcuIpnOA0BvCgeeJy1Q@dpg-cu0adgdumphs7380gdag-a.oregon-postgres.render.com/examenbdd',
    ssl: {
        rejectUnauthorized: false
    }
});
postgresProfile.connect()
    .then(() => {
    console.log('Conexión a la base de datos establecida con éxito 777');
})
    .catch(err => {
    console.error('Error al conectar a la base de datos 88:', err.stack);
});
exports.default = postgresProfile;
