import PG from "pg";

const { Client } = PG;

export async function obtenerAdmins() {
    const client = new Client({
        user: 'neondb_owner',
        host: 'ep-lucky-fog-a2x9zvmh.eu-central-1.aws.neon.tech',
        database: 'neondb',
        password: 'npg_2SAdCYxnMe6T',
        port: 5432,
        ssl: { rejectUnauthorized: false }
    });
    const query = 'SELECT * FROM admin;';
    try {
        await client.connect();
        const res = await client.query(query);
        console.log('Datos de admin:', res.rows);
        return res.rows;
    } catch (err) {
        console.error('Error consultando admin:', err);
        throw err;
    } finally {
        await client.end();
    }
}
