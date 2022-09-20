const bodyParser = require('body-parser');
const ejs = require('ejs');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/electriveDB", { useNewUrlParser: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

//Sample code for testing connection with database
const studentSchema = new mongoose.Schema({
    name: String,
    regd_no: String,
    roll_no: String,
    mobile_no: String,
    branch: String,
    year: String
});

const Student = mongoose.model('Student', studentSchema);

const student = new Student({
    name: 'Aryan',
    regd_no: '21XXX',
    roll_no: '31XX',
    mobile_no: '77079XXXXX',
    branch: 'CE',
    year: 'TE'
});

student.save(function (err) {
    if (err) { console.log(err); }
    else { console.log("Data Inserted"); }
});

Student.find(function (err, students) {
    if (err) { console.log(err); }
    else { console.log(students); }
});

app.route('/')
    .get(function (req, res) {
        res.render(__dirname + '/views/home');
    });

app.listen(3000, function () {
    console.log('Server started successfully,');
});