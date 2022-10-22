const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const app = express();
const bodyParser_urlencoded = bodyParser.urlencoded({ extended: true });

app.use(express.static('public'));

app.set('view engine', 'ejs');

const studentSchema = new mongoose.Schema({
    name: String,
    regd_no: String,
    roll_no: String,
    mobile_no: String,
    branch: String,
    year: String,
    vehicle: String
});

const mailSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    subject: String,
});

const noticeSchema = new mongoose.Schema({
    title: String,
    content: String
});

const newsSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Student = mongoose.model('Student', studentSchema);
const Contact = mongoose.model('Contact', mailSchema);
const Notice = mongoose.model('Notice', noticeSchema);
const News = mongoose.model('News', newsSchema);

let isAdmin = false;


app.route('/')
    .get((req, res) => {
        res.render(__dirname + '/views/home');
    });


app.route('/rent/:vehicle')
    .get(bodyParser_urlencoded, (req, res) => {
        const vehicleName = req.params.vehicle;
        const imgLocation = "/images/" + vehicleName + ".png";
        res.render(__dirname + '/views/rent', { vehicleName: vehicleName, imgLocation: imgLocation });
    })
    .post(bodyParser_urlencoded, (req, res) => {
        const student = new Student({
            name: req.body.name,
            regd_no: req.body.regd_no,
            roll_no: req.body.roll_no,
            mobile_no: req.body.mobile_no,
            branch: req.body.branch,
            year: req.body.year,
            vehicle: req.params.vehicle
        });

        student.save(function (err) {
            if (err) { console.log(err); }
            else { res.send("<div> <h1> Booked </h1> <a href='/'> Home </a> </div>"); }
        });
    });


app.route('/contact')
    .post(bodyParser_urlencoded, (req, res) => {
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
    });


app.route('/notices')
    .get((req, res) => {
        Notice.find({}, (err, notices) => {
            if (err) {
                return res.send("Something went wrong.......")
            };
            res.render(__dirname + '/views/notices', { notices: notices });
        });
    });


app.route('/news')
    .get((req, res) => {
        News.find({}, (err, news) => {
            if (err) {
                return res.send("Something went wrong.......")
            };
            res.render(__dirname + '/views/news', { news: news });
        });
    });


app.route('/projects')
    .get((req, res) => {
        res.render(__dirname + '/views/projects');
    });


app.route('/about')
    .get((req, res) => {
        res.render(__dirname + '/views/about');
    });


app.route('/post')
    .get((req, res) => {
        res.render(__dirname + '/views/post');
    })
    .post(bodyParser_urlencoded, (req, res) => {
        const redirect = req.body.redirect;
        if (process.env.PASSWORD === req.body.code && (redirect === "news" || redirect === "notice")) {
            isAdmin = true;
            res.redirect('/post/' + redirect);
        }
        else { res.status(404).render(__dirname + "/views/404"); }
    })


app.route('/post/notice')
    .get((req, res) => {
        if (isAdmin) {
            isAdmin = false;
            res.render(__dirname + '/views/postNotice');
        }
        else { res.status(404).render(__dirname + "/views/404"); }
    })
    .post(bodyParser_urlencoded, (req, res) => {
        const notice = new Notice({
            title: req.body.title,
            content: req.body.content
        });
        notice.save((err) => {
            if (err) { console.log(err); }
            else { res.send("<div> <h1> Done </h1> <a href='/'> Home </a> </div>"); }
        })
    });


app.route('/post/news')
    .get((req, res) => {
        if (isAdmin) {
            isAdmin = false;
            res.render(__dirname + '/views/postNews');
        }
        else { res.status(404).render(__dirname + "/views/404"); }
    })
    .post(bodyParser_urlencoded, (req, res) => {
        const news = new News({
            title: req.body.title,
            content: req.body.content
        });
        news.save((err) => {
            if (err) { console.log(err); }
            else { res.send("<div> <h1> Done </h1> <a href='/'> Home </a> </div>") }
        });
    });


app.use((req, res) => {
    res.status(404).render(__dirname + "/views/404");
});


app.listen(process.env.PORT, () => { console.log('Server started successfully.'); });