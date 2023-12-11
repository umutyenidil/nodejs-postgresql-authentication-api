// packages
import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

// env config
dotenv.config();

// variables
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {credentials: true, origin: process.env.URL || "*"};
const __dirname = dirname(fileURLToPath(import.meta.url));

// package middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// file definition middlewares
app.use('/', express.static(join(__dirname, 'public')));

// listening
app.listen(PORT, (error) => {
    console.log(`Server is listening on ${PORT}`);
});