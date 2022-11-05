import express from 'express';
import { getHome, postContact, getNotice, getNews, getProject, getAbout } from '../controllers/home.js';

const router = express.Router();

router.route('/').get(getHome);

router.route('/contact').post(postContact);

router.route('/notices').get(getNotice);

router.route('/news').get(getNews);

router.route('/projects').get(getProject);

router.route('/about').get(getAbout);

export default router;