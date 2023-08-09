import { Request, Router, Response } from 'express';
import RecipesController from '../controllers/RecipesController';

const recipesController = new RecipesController();
const router = Router();

router.get('/name', (req: Request, res: Response) => recipesController.getAllRecipes(req, res));
router.get('/letter', (req: Request, res: Response) => recipesController.getByFirstLetter(req, res));

export default router;