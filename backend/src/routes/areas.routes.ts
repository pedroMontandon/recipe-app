import { Router } from 'express';
import AreaController from '../controllers/AreaController';

const router = Router();
const controller = new AreaController();

router.get('/', (req, res) => controller.getAll(req, res));

export default router;
