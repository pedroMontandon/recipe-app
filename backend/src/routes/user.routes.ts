import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import UserValidation from '../middlewares/UserValidation';

const userController = new UserController();
const router = Router();

router.post('/login', UserValidation.validateLogin, (req: Request, res: Response) => userController.login(req, res));
router.post('/signup', UserValidation.validateSignUp, (req: Request, res: Response) => userController.signUp(req, res));
router.get('/activate/:id/:activationCode', (req: Request, res: Response) => userController.activateAccount(req, res));

export default router;