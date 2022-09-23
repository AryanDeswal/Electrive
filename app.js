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

const Student = mongoose.model('Student', studentSchema);


app.route('/')
    .get(function (req, res) {
        res.render(__dirname + '/views/home');
    });


app.route('/rent')
    .get(function (req, res) {
        res.render(__dirname + '/views/rent');
    })
    .post(function (req, res) {

        const s_name = req.body.name, s_regd_no = req.body.regd_no;
        const s_roll_no = req.body.roll_no, s_mobile_no = req.body.mobile_no;
        const s_branch = req.body.branch, s_year = req.body.year;

        const student = new Student({
            name: s_name,
            regd_no: s_regd_no,
            roll_no: s_roll_no,
            mobile_no: s_mobile_no,
            branch: s_branch,
            year: s_year
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

app.listen(3000, function () {
    console.log('Server started successfully,');
});