import PG from "pg";
const { Client } = PG;

// Configuración de conexión a Neon
const client = new Client({
    user: 'neondb_owner',
    host: 'ep-lucky-fog-a2x9zvmh.eu-central-1.aws.neon.tech',
    database: 'neondb',
    password: 'npg_5Rta7XhemApu',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

// Ejemplo de conexión y consulta
async function conectarYConsultar() {
    try {
        await client.connect();
        console.log('Conexión exitosa a Neon');
        const res = await client.query('SELECT * FROM admin;');
    console.table(res.rows);
    } catch (err) {
        console.error('Error de conexión o consulta:', err);
    } finally {
        await client.end();
    }
}

conectarYConsultar();
