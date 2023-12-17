import { createTransport } from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
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

const handlebarOptions = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve('./src/views'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./src/views'),
    extName: ".handlebars",
}

transporter.use('compile', hbs(handlebarOptions));

export const registerMail = (email, name) => {
    return {
        from: `Eventry <${NODEMAILER_USER}>`,
        to: email,
        subject: `Bienvenido!`,
        template: 'email',
        context: {
            title: 'Eventry',
            name,
            copyright: '©Copyright-2024. Todos los derechos reservados. Eventry.com'
        }
    }
}

export const ticketMail = (user, ticket) => {
    const { first_name, email } = user;
    const { reference_number, event_name, event_date } = ticket;
    const date = new Date(event_date);

    return {
        from: `Eventry <${NODEMAILER_USER}>`,
        to: email,
        subject: `Info ticket`,
        template: 'ticket',
        context: {
            title: 'Eventry',
            name: first_name,
            event: event_name,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            reference: reference_number,
            copyright: '©Copyright-2024. Todos los derechos reservados. Eventry.com'
        }
    }
}
