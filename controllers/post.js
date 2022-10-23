import dotenv from 'dotenv';
import Notice from '../models/notice.js'
import News from '../models/news.js'

dotenv.config();

let isAdmin = false;

export const getPost = (req, res) => {
    res.render('../views/post');
};

export const postPost = (req, res) => {
    const redirect = req.body.redirect;
    if (process.env.PASSWORD === req.body.code && (redirect === "news" || redirect === "notice")) {
        isAdmin = true;
        res.redirect('/post/' + redirect);
    }
    else { res.status(404).render('../views/404'); }
};

export const getNotice = (req, res) => {
    if (isAdmin) {
        isAdmin = false;
        res.render('../views/postNotice');
    }
    else { res.status(404).render('../views/404'); }
};

export const postNotice = (req, res) => {
    const notice = new Notice({
        title: req.body.title,
        content: req.body.content
    });
    notice.save((err) => {
        if (err) { console.log(err); }
        else { res.send("<div> <h1> Done </h1> <a href='/'> Home </a> </div>"); }
    })
};

export const getNews = (req, res) => {
    if (isAdmin) {
        isAdmin = false;
        res.render('../views/postNews');
    }
    else { res.status(404).render('../views/404'); }
};

export const postNews = (req, res) => {
    const news = new News({
        title: req.body.title,
        content: req.body.content
    });
    news.save((err) => {
        if (err) { console.log(err); }
        else { res.send("<div> <h1> Done </h1> <a href='/'> Home </a> </div>") }
    });
}; 