import dotenv from "dotenv";
dotenv.config();

const config = {
    PORT : process.env.PORT,
    DB_URL : process.env.MONGODB_URI,

    JWT_SECRET : process.env.JWT_SECRET,
    JWT_EXPIRES : process.env.JWT_EXPIRES_IN,
    COOKIE_NAME : process.env.COOKIE_NAME

}

export default config;