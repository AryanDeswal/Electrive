import express from 'express';
import { getPost, postPost, getNotice, postNotice, getNews, postNews } from '../controllers/post.js'

const router = express.Router();

router.route('/')
    .get(getPost)
    .post(postPost);

router.route('/notice')
    .get(getNotice)
    .post(postNotice);

router.route('/news')
    .get(getNews)
    .post(postNews);

export default router;