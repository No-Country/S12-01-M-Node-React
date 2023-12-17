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

// const plantillaHTML = `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         body {
//             border: 12px solid rgba(66, 25, 45, 0.1);
//             width: 50%;
//             margin: 0 auto;
//             text-align: center;
//         }

//         header {
//             width: 100%;
//             height: 70px;
//             background-color: rgba(236, 72, 153, .4);
//             color: white;
//             font-weight: bold;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }

//         main {
//             text-align: center;
//             height: 250px;
//             font-size: 1.4em;
//         }

//         a {
//             display: inline-block;
//             color: white;
//             background-color: rgba(0, 0, 255, 0.6);
//             padding: 10px;
//             font-weight: bold;
//             border-radius: 9%;
//             text-decoration: none;
//         }

//         footer {
//             height: 40px;
//             text-align: center;
//             background-color: rgba(236, 72, 153, .4);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }
//     </style>
// </head>

// <body>
//     <header>
//         <h1>Eventry</h1>
//     </header>
//     <main>
//         <h2>Tu mejor lugar para encontrar que hacer!</h2>
//         <p>Esperamos puedas encontrar las mejores actividades para pasar tus dias y disfrutar a pleno.
//             <br>Encontraras eventos con sus dias, fechas y horas para que no puedas perderte nada.
//             <br>Disfruta cada dia!
//         </p>
//         <a href="https://eventry-one.vercel.app/">Comenza!</a>
//     </main>
//     <footer>
//         ©Copyright-2024. Todos los derechos reservados. Eventry.com
//     </footer>
// </body>

// </html>;`

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
