import { Request, Router, Response } from 'express';
import RecipesController from '../controllers/RecipesController';
import CategoryController from '../controllers/CategoryController';

const recipesController = new RecipesController();
const categoryController = new CategoryController();
const router = Router();

router.get('/name', (req: Request, res: Response) => recipesController.getAllRecipes(req, res));
router.get('/letter', (req: Request, res: Response) => recipesController.getByFirstLetter(req, res));
router.get('/categories', (req: Request, res: Response) => categoryController.getAll(req, res));
router.get('/category', (req, res) => categoryController.getRecipesByCategory(req, res));

export default router;