"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const postgresProfile = new pg_1.Pool({
    connectionString: 'postgresql://admin:qnahbhB9CWZrBlcuIpn0A0BvCgeeJy10@dpg-cuwadgdumphs7380gdag-a.oregon-postgr/examenbdd',
    ssl: {
        rejectUnauthorized: false
    }
});
postgresProfile.connect()
    .then(() => {
    console.log('Conexión a la base de datos establecida con éxito 777');
})
    .catch(err => {
    console.error('Error al conectar a la base de datos:', err.stack);
});
exports.default = postgresProfile;
