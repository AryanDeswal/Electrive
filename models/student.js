import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: String,
    regd_no: String,
    roll_no: String,
    mobile_no: String,
    branch: String,
    year: String,
    vehicle: String
});

const Student = mongoose.model('Student', studentSchema);

export default Student;