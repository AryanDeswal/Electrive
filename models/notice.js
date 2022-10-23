import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Notice = mongoose.model('Notice', noticeSchema);

export default Notice;