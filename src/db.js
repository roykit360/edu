//NO MODIFICAR CODIGO SOLO DEBE CORREGIR LA CONTRASEÑA DE LA BASE DE DATOS
import PG from "pg";
const { Client } = PG;

// Configuración de conexión a Neon
const client = new Client({
    user: 'neondb_owner',
    host: 'ep-lucky-fog-a2x9zvmh.eu-central-1.aws.neon.tech',
    database: 'neondb',
    password: 'npg_2SAdCYxnMe6T',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

// Conectar y mostrar registros de admin
async function conectarYMostrarAdmin() {
    try {
        await client.connect();
        console.log('Conexión exitosa a la base de datos neondb');
        const res = await client.query('SELECT * FROM admin;');
        console.table(res.rows);
    } catch (err) {
        console.error('Error de conexión o consulta:', err);
    } finally {
        await client.end();
    }
}

conectarYMostrarAdmin();

//prueba de conexion