import express from 'express';
import morgan from 'morgan';

import usuarioRoutes from "./rutas/usuario.ruta.js";
const app = express();

app.use(morgan('dev'));

app.use(usuarioRoutes);

export default app;