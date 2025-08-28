import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth.controllers.js";

const router = Router();

router.post('/register', (req, res) => {
    // Lógica para registrar un nuevo usuario
});

router.post('/login', (req, res) => {
    // Lógica para iniciar sesión
});

export default router;
