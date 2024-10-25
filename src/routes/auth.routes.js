import { Router } from 'express';
import { login, logout, profile, register } from '../controllers/auth.controller.js';
import { requiredAuth } from '../middlewares/tokenValidation.js';
import { validateSchema } from '../middlewares/validator.middlewares.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';


const router = Router();


router.post('/register',validateSchema(registerSchema), register);
router.post('/login',validateSchema(loginSchema), login);
router.post('/logout', logout);
router.post('/profile', requiredAuth, profile);

export default router;