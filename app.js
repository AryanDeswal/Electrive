import express from 'express';
import ejs from 'ejs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoutes.js';
import homeRoutes from './routes/homeRoutes.js'
import rentRoutes from './routes/rentRoutes.js'

dotenv.config();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`Connected to DB & Server running on port: ${PORT}`); }))
    .catch((error) => console.log(error.message));

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/', homeRoutes);
app.use('/rent', rentRoutes);
app.use('/post', postRoutes);

app.use((req, res) => {
    res.status(404).render("../views/404");
});