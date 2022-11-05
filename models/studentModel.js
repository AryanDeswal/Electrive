import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    regd_no: { type: String, required: true },
    roll_no: { type: String, required: true },
    mobile_no: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
    vehicle: { type: String, required: true }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;