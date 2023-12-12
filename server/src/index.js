import express from "express";
import cookieParser from "cookie-parser"
import passport from "passport";
import cors from "cors";
import config from "./config.js";
import connectDB from "./database/db.js"
import initializePassport from "./services/auth.service.js";

import router from './routes/index.js';

const { PORT } = config || 8080;

const app = express();
app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());

app.use(cookieParser());

app.use('/api/v1', router);

const httpServer = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

connectDB();
