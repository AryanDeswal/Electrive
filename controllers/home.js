import News from '../models/news.js'
import Notice from '../models/notice.js'
import Contact from '../models/contact.js'

export const getHome = (req, res) => {
    res.render('../views/home');
};

export const getNotice = (req, res) => {
    Notice.find({}, (err, notices) => {
        if (err) {
            return res.send("Something went wrong.......")
        };
        res.render('../views/notices', { notices: notices });
    });
};

export const getNews = (req, res) => {
    News.find({}, (err, news) => {
        if (err) {
            return res.send("Something went wrong.......")
        };
        res.render('../views/news', { news: news });
    });
};

export const getProject = (req, res) => {
    res.render('../views/projects');
};

export const getAbout = (req, res) => {
    res.render('../views/about');
};

export const postContact = (req, res) => {
    const contact = new Contact({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        subject: req.body.subject,
    });

    contact.save(function (err) {
        if (err) { console.log(err); }
        else { res.send("<div> <h1> Done </h1> <a href='/'> Home </a> </div>"); }
    });
};