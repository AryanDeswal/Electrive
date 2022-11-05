import express from 'express';
import { getVehicle, postVehicle } from '../controllers/rent.js';

const router = express.Router();

router.route('/:vehicle')
    .get(getVehicle)
    .post(postVehicle);

export default router;