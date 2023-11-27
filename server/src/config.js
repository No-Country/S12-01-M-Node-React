import dotenv from "dotenv";
dotenv.config();

const config = {
    PORT : process.env.PORT,
    DB_URL : process.env.MONGODB_URI,

    JWT_SECRET : process.env.JWT_SECRET,
    JWT_EXPIRES : process.env.JWT_EXPIRES_IN,

}

export default config;