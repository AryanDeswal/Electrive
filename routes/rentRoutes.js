import express from 'express';
import bodyParser from 'body-parser';
import { getVehicle, postVehicle } from '../controllers/rent.js';

const router = express.Router();
const bodyParser_urlencoded = bodyParser.urlencoded({ extended: true });

router.route('/:vehicle')
    .get(bodyParser_urlencoded, getVehicle)
    .post(bodyParser_urlencoded, postVehicle);

export default router;