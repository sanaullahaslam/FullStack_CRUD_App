// index.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import itemRouter from './routes/item.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
    });
}).catch(error => console.log(error));

app.use('/items', itemRouter);
