import { crearTablaUsuario } from '../modelo/usuario.modelo.js';
import { Router } from "express";

const router = Router();

router.get('/usuarios', (req, res) => {
    res.send({ message: 'Lista de usuarios' });
});

router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: `Detalles del usuario con ID: ${id}` });
});

router.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    res.send({ message: 'Usuario creado', usuario: nuevoUsuario });
});

router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: `Usuario con ID: ${id} eliminado` });
});

router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuarioActualizado = req.body;
    res.send({ message: `Usuario con ID: ${id} actualizado`, usuario: usuarioActualizado });
});

router.patch('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const cambios = req.body;
    res.send({ message: `Usuario con ID: ${id} parcialmente actualizado`, cambios });
});

router.options('/usuarios', (req, res) => {
    res.set('Allow', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.sendStatus(200);
});
