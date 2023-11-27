import express from "express";
import cookieParser from "cookie-parser"
import passport from "passport";
import cors from "cors";
import config from "./config.js";

const {PORT} = config || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use(cookieParser());

const httpServer = app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
})
