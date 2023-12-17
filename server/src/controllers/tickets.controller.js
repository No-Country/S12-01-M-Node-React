import { createTicketService, getUser, ticketAlreadyExists, ticketEmailService, purchaseTicketService } from "../services/tickets.service.js";
import { transporter, ticketMail } from "../utils/nodemailer.js";

export const getSingleTicketController = async (req, res) => {
    try {
        const { userid, reference } = req.params;
        const user = await getUser(userid);

        if (!user.tickets || user.tickets.length === 0) throw new Error(`No ticket registered for ${user.first_name}`);

        const ticket = user.tickets.find(ticket => ticket.reference_number === reference);
        if (!ticket) throw new Error(`Ticket not found`);

        return res.status(200).json({ ticket });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const createTicketController = async (req, res) => {
    try {
        const { userid } = req.params;
        const { event, purchase } = req.query;
        if (await ticketAlreadyExists(userid, event)) throw new Error(`Ticket already exists`);

        const ticket = await createTicketService(userid, event);

        if (purchase) {
            const transaction = await purchaseTicketService(event);
            if (!transaction) throw new Error(`Event ${event} not found`);
            if (transaction.stock_tickets > 0) {
                transaction.stock_tickets = transaction.stock_tickets - 1;
                await transaction.save();
            } else {
                throw new Error(`No tickets available for ${event}`);
            }
        }

        return res.status(200).json({ message: "Ticket created successfully", ticket });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getController = async (req, res) => {
    try {
        const { userid } = req.params;
        const tickets = await getUser(userid);

        if (!tickets) throw new Error(`Couldn't find user`);
        if (!tickets?.tickets) throw new Error(`No ticket found`);
        return res.status(200).json({ tickets: tickets?.tickets });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const sendTicketEmailController = async (req, res) => {
    try {
        const { userid, reference } = req.params;
        const user = await getUser(userid);
        if (!user) throw new Error(`Couldn't find user`);

        const ticket = await ticketEmailService(user, reference);
        await transporter.sendMail(ticketMail(user, ticket));
        
        res.status(200).json({ data: 'Ticked sended via email.' });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
