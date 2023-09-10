import { Router } from 'express';
import IngredientController from '../controllers/IngredientController';


const router = Router();
const controller = new IngredientController();

router.get('/', (req, res) => controller.getAll(req, res));

export default router;
