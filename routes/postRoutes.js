import express from 'express';
import bodyParser from 'body-parser';
import { getPost, postPost, getNotice, postNotice, getNews, postNews } from '../controllers/post.js'

const router = express.Router();
const bodyParser_urlencoded = bodyParser.urlencoded({ extended: true });


router.route('/')
    .get(getPost)
    .post(bodyParser_urlencoded, postPost);

router.route('/notice')
    .get(getNotice)
    .post(bodyParser_urlencoded, postNotice);

router.route('/news')
    .get(getNews)
    .post(bodyParser_urlencoded, postNews);

export default router;