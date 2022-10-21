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

const Student = mongoose.model('Student', studentSchema);
const Contact = mongoose.model('Contact', mailSchema);


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
            else {
                console.log("Data Inserted");
                res.send("<h1>Booked</h1>");
            }
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
            else { res.send("<h1>Done</h1>"); }
        });
    });


app.route('/notices')
    .get((req, res) => {
        res.render(__dirname + '/views/notices');
    });

app.route('/about')
    .get((req, res) => {
        res.render(__dirname + '/views/about.ejs');
    });

app.use((req, res) => { res.status(404).render(__dirname + "/views/404.ejs"); });

app.listen(process.env.PORT, () => { console.log('Server started successfully,'); });