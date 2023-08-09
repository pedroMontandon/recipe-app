import { Router } from 'express';
import userRouter from './user.routes';
import mealsRouter from './meals.routes';
import drinksRouter from './drinks.router';
import TypeVerification from '../middlewares/TypeVerification';

const router = Router();
router.use('/user', userRouter);
router.use('/meals', TypeVerification.verifyType, mealsRouter);
router.use('/drinks',TypeVerification.verifyType, drinksRouter);

export default router;