import express from 'express'
import { signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();



router.post('/SignUp', signup);
router.post('/SignIn', signin);


export default router;