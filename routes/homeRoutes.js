import express from 'express';
import bodyParser from 'body-parser';
import { getHome, postContact, getNotice, getNews, getProject, getAbout } from '../controllers/home.js';

const router = express.Router();
const bodyParser_urlencoded = bodyParser.urlencoded({ extended: true });

router.route('/').get(getHome);

router.route('/contact').post(bodyParser_urlencoded, postContact);

router.route('/notices').get(getNotice);

router.route('/news').get(getNews);

router.route('/projects').get(getProject);

router.route('/about').get(getAbout);

export default router;