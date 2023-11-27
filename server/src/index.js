import express from "express";
import cookieParser from "cookie-parser"
import passport from "passport";
import cors from "cors";
import config from "./config.js";
import connectDB from "./database/db.js"
import initializePassport from "./services/auth.service.js";

import routerApi from "./routes/index.js";


const {PORT} = config || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

initializePassport();
app.use(passport.initialize());

app.use(cookieParser());

connectDB();

app.use("/api/v1", routerApi);



const httpServer = app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
})
