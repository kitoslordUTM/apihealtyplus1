"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Configura la conexión a tu base de datos en Render.com
const postgresProfile = new pg_1.Pool({
    user: 'admin', // Reemplaza con el username de Render.com
    host: 'dpg-cuwadgdumphs7380gdag-a', // Reemplaza con el hostname de Render.com
    database: 'examenbd', // Reemplaza con el nombre de la base de datos de Render.com
    password: 'qnahbhB9CWZrBlcuIpn0A8BvCgeeJy10', // Reemplaza con la contraseña de Render.com
    port: 5432, // Puedes mantener el puerto 5432, a menos que Render te indique otro
    ssl: {
        rejectUnauthorized: false // Necesario para algunas configuraciones de Render
    }
});
// Probar la conexión
postgresProfile.connect((err, client, release) => {
    if (err) {
        return console.error('Error al conectar a la base de datos:', err.stack);
    }
    console.log('Conexión exitosa a la base de datos en Render.com');
    release();
});
exports.default = postgresProfile;
