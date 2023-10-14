import { Request, Router, Response } from 'express';
import userRouter from './user.routes';
import mealsRouter from './meals.routes';
import drinksRouter from './drinks.router';
import ingredientsRouter from './ingredients.routes';
import TypeVerification from '../middlewares/TypeVerification';
import RecipesController from '../controllers/RecipesController';
import RecipeValidation from '../middlewares/RecipeValidation';
import TokenValidation from '../middlewares/TokenValidation';

const router = Router();
const recipeController = new RecipesController();

router.use('/user', userRouter);
router.use((new TokenValidation()).validate);
router.use('/meals', TypeVerification.verifyType, mealsRouter);
router.use('/drinks',TypeVerification.verifyType, drinksRouter);
router.use('/ingredients', ingredientsRouter);
router.post('/recipes', RecipeValidation.validate, (req: Request, res: Response) => recipeController.create(req, res));

export default router;