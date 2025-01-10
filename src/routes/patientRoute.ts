import { Router, Request, Response } from "express";
import { Patient } from "../models/Patient";
import postgresProfile from "../database/db";


const router = Router();

router.get('/Get', async (req: Request, res: Response) => {
    try {
        const query = 'SELECT * FROM Patient';
        const response = await postgresProfile.query<Patient>(query);
        res.status(200).json(response.rows);
    } catch (err: any) {
        res.status(500).send('No se obtuvieron todas las alarmas');
    }
});


// Insertar un paciente
router.post('/Post', async (req: Request, res: Response) => {
    try {
        const { patientId ,name, age, gender, historialId }: Patient = req.body;

        // Consulta SQL corregida
        const query = 'INSERT INTO Patient (patientId, name, age, gender, historialId) VALUES ($1, $2, $3, $4 , $5)';
        const values = [patientId, name, age, gender, historialId];

        // Ejecutar la consulta
        await postgresProfile.query(query, values);

        res.status(201).send('Paciente creado correctamente');
    } catch (err) {
        // Log detallado del error para depuración
        console.error('Error al crear el paciente:', err);
        res.status(500).send('Error al crear el paciente');
    }
});



export default router;
