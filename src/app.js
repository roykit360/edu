import express from 'express';
import morgan from 'morgan';

import authRautes from "./rutas/usuario.ruta.js";
const app = express();

app.use(morgan('dev'));

app.use(authRoutes);

export default app;