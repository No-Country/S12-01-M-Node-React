import { createTransport } from "nodemailer";
import config from "../config.js";

const { NODEMAILER_USER, NODEMAILER_PW } = config;

export const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PW
    }
});

export const contactMailOptions = (values) => {
    const { email, subject, message } = values;
    return {
        from: `Eventry <${NODEMAILER_USER}>`,
        to: email,
        subject: subject,
        text: message
    }
}
