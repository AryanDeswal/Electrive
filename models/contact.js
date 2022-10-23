import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    subject: String,
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;