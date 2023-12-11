import Ticket from "../models/tickets.model.js";
import Event from "../models/event.model.js";
import userModel from "../models/user.model.js";

export const createTicketService = async (userid, event) => {
try {
    const eventModel = await Event.findOne({ name: event })
    if (!eventModel) throw new Error(`Couldn't find event ${event}, please check the list of events to see a list of available events.`);
    const ticket = await Ticket.create({
        event_name: eventModel._id,
        event_date: eventModel._id,
    })

    const userUpdated = await userModel.updateOne({
        _id: userid,
    }, {
        ticket: ticket._id
    }, {
        new: true,
    })

    if (!userUpdated) throw new Error(`Couldn't update user ticket, please try again.`);
    
    return ticket;
} catch (error) {
    throw new Error(error.message);
}
}

export const getUser = async (userid) => {
    try {
        return await userModel.findOne({ _id: userid }).populate('ticket', 'reference_number event_name event_date');
    } catch (error) {
        throw new Error(error.message);
    }
}

export const ticketAlreadyExists = async (userid, eventName) => {
    try {
        const user = await userModel.findOne({ _id: userid }).populate('ticket', 'reference_number event_name event_date');
        if (!user) throw new Error(`Couldn't find user`);

        const event = await Event.findOne({ name: eventName });
        if (!event) throw new Error(`Couldn't find event ${event}, please check the list of events to see a list of available events.`);

        if (!user?.ticket) return false;
        
        return user?.ticket?.event_name.toString() === event?._id.toString();
    } catch (error) {
        throw new Error(error.message);
    }
}
