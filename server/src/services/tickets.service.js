import Ticket from "../models/tickets.model.js";
import Event from "../models/event.model.js";
import userModel from "../models/user.model.js";

export const createTicketService = async (userid, event) => {
    try {
        const eventModel = await Event.findOne({ name: event })
        if (!eventModel) throw new Error(`Couldn't find event ${event}, please check the list of events to see a list of available events.`);
        const ticket = await Ticket.create({
            event_name: eventModel.name,
            event_date: eventModel.date_of_event,
        })

        const userUpdated = await userModel.updateOne({
            _id: userid,
        }, {
            $addToSet: { tickets: ticket._id }
        });

        if (!userUpdated) throw new Error(`Couldn't update user ticket, please try again.`);

        return {
            reference_number: ticket.reference_number,
            event_name: ticket.event_name,
            event_date: ticket.event_date,
            _id: ticket._id
        };
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getUser = async (userid) => {
    try {
        const user = await userModel.findOne({ _id: userid }).populate('tickets', 'reference_number event_name event_date');
        if (!user) throw new Error(`User not found`);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const ticketAlreadyExists = async (userid, eventName) => {
    try {
        const user = await userModel.findOne({ _id: userid }).populate('tickets', 'reference_number event_name event_date');
        if (!user) throw new Error(`Couldn't find user`);

        const event = await Event.findOne({ name: eventName });
        if (!event) throw new Error(`Couldn't find event "${eventName}", please check the list of events to see a list of available events.`);

        if (!user?.tickets) return false;

        return user?.tickets?.some(ticket => ticket.event_name === event?.name);
    } catch (error) {
        throw new Error(error.message);
    }
}

export const ticketEmailService = async (user, reference) => {
    try {
        const ticket = user.tickets.find(ticket => ticket.reference_number === reference);
        if (!ticket) throw new Error(`Couldn't find ticket with reference number "${reference}"`);
        return {
            reference_number: ticket.reference_number,
            event_name: ticket.event_name,
            event_date: ticket.event_date
        };
    } catch (error) {
        throw new Error(error.message);
    }
}
