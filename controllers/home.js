import News from '../models/newsModel.js'
import Notice from '../models/noticeModel.js'
import Contact from '../models/contactModel.js'

export const getHome = (req, res) => {
    res.render('../views/home');
};

export const getNotice = (req, res) => {
    Notice.find({}, (err, notices) => {
        if (err) {
            return res.send("Something went wrong.......")
        };
        res.render('../views/notices', { notices });
    });
};

export const getNews = (req, res) => {
    News.find({}, (err, news) => {
        if (err) {
            return res.send("Something went wrong.......")
        };
        res.render('../views/news', { news });
    });
};

export const getProject = (req, res) => {
    res.render('../views/projects');
};

export const getAbout = (req, res) => {
    res.render('../views/about');
};

export const postContact = (req, res) => {
    const { name, email, subject } = req.body;

    const contact = new Contact({ name, email, subject, });

    contact.save(function (err) {
        if (err) { console.log(err); }
        else { res.send("<div> <h1> Done </h1> <a href='/'> Home </a> </div>"); }
    });
};