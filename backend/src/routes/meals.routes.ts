import { Request, Router, Response } from 'express';
import RecipesController from '../controllers/RecipesController';
import CategoryController from '../controllers/CategoryController';
import IngredientController from '../controllers/IngredientController';

const recipesController = new RecipesController();
const categoryController = new CategoryController();
const ingredientController = new IngredientController();
const router = Router();

router.get('/name', (req: Request, res: Response) => recipesController.getAllRecipes(req, res));
router.get('/letter', (req: Request, res: Response) => recipesController.getByFirstLetter(req, res));
router.get('/categories', (req: Request, res: Response) => categoryController.getAll(req, res));
router.get('/category', (req, res) => categoryController.getRecipesByCategory(req, res));
router.get('/ingredient', (req, res) => ingredientController.getByIngredient(req, res));
router.get('/random', (req, res) => recipesController.random(req, res));
router.get('/:id', (req, res) => recipesController.getById(req, res));

export default router;