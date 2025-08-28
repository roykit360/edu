import PG from "pg";

const { Client } = PG;

// Función para conectarse a la base de Datos
export async function crearUsuario({ nombre, correo, contrasena }) {
	const client = new Client({
		user: 'neondb_owner',
		host: 'ep-lucky-fog-a2x9zvmh.eu-central-1.aws.neon.tech',
		database: 'neondb',
		password: 'npg_2SAdCYxnMe6T',
		port: 5432,
		ssl: { rejectUnauthorized: false }
	});

// Función para crear un nuevo usuario
	const query = `
		INSERT INTO usuario (nombre, correo, contrasena)
		VALUES ($1, $2, $3)
		RETURNING *;
	`;
	try {
		await client.connect();
		const res = await client.query(query, [nombre, correo, contrasena]);
		console.log('Usuario creado:', res.rows[0]);
		return res.rows[0];
	} catch (err) {
		console.error('Error creando usuario:', err);
		throw err;
	} finally {
		await client.end();
	}
}

// Función para crear la tabla usuario si no existe
export async function crearTablaUsuario() {
	const query = `
		CREATE TABLE IF NOT EXISTS usuario (
			id SERIAL PRIMARY KEY,
			nombre VARCHAR(100) NOT NULL,
			correo VARCHAR(100) UNIQUE NOT NULL,
			contrasena VARCHAR(100) NOT NULL,
			fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		);
	`;
	try {
		await client.connect();
		await client.query(query);
		console.log('Tabla usuario creada o ya existe');
	} catch (err) {
		console.error('Error creando la tabla usuario:', err);
	} finally {
		await client.end();
	}
}
