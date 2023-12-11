import { createTicketService, getUser, ticketAlreadyExists } from "../services/tickets.service.js";

export const createController = async (req, res) => {
    try {
        const { userid } = req.params;
        const { event } = req.query;
        if (await ticketAlreadyExists(userid, event)) throw new Error(`Ticket already exists`);
        
        const ticket = await createTicketService(userid, event);

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
        if (!tickets?.ticket) throw new Error(`No ticket found`);

        return res.status(200).json({ data: tickets?.ticket });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
