import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import UserValidation from '../middlewares/UserValidation';

const userController = new UserController();
const router = Router();

router.post('/login', UserValidation.validateLogin, (req: Request, res: Response) => userController.login(req, res));