const bodyParser = require('body-parser');
const ejs = require('ejs');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/electriveDB", { useNewUrlParser: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

const studentSchema = new mongoose.Schema({
    name: String,
    regd_no: String,
    roll_no: String,
    mobile_no: String,
    branch: String,
    year: String
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
    .get(function (req, res) {
        res.render(__dirname + '/views/home');
    });


app.route('/rent')
    .get(function (req, res) {
        res.render(__dirname + '/views/rent');
    })
    .post(function (req, res) {

        const name = req.body.name, regd_no = req.body.regd_no;
        const roll_no = req.body.roll_no, mobile_no = req.body.mobile_no;
        const branch = req.body.branch, year = req.body.year;

        const student = new Student({
            name: name,
            regd_no: regd_no,
            roll_no: roll_no,
            mobile_no: mobile_no,
            branch: branch,
            year: year
        });

        student.save(function (err) {
            if (err) { console.log(err); }
            else { console.log("Data Inserted"); }
        });

        Student.find(function (err, students) {
            if (err) { console.log(err); }
            else { res.send(students); }
        });
    });


app.route('/contact')
    .post(function (req, res) {

        const fname = req.body.fname;
        const lname = req.body.lname;
        const email = req.body.email;
        const subject = req.body.subject;
        
        const contact = new Contact({
            fname: fname,
            lname: lname,
            email: email,
            subject: subject,
        });

        contact.save(function (err) {
            if (err) { console.log(err); }
            else { console.log("Data Inserted"); }
        });

        Contact.find(function (err, contacts) {
            if (err) { console.log(err); }
            else { res.send(contacts); }
        });
    });


app.listen(3000, function () {
    console.log('Server started successfully,');
});