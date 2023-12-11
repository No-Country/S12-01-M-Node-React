import Ticket from "../models/tickets.model.js"

const ticketCounter = async () => {
    let count = await Ticket.estimatedDocumentCount();
    let alreadyExists = await Ticket.findOne({ reference_number: count });
    
    if (!alreadyExists) return count;
    
    count++;
    let exitLoop = true;
    while (exitLoop) {
        if (alreadyExists) exitLoop = false;
        alreadyExists = await Ticket.findOne({ reference_number: count })
        alreadyExists && count++;
    }
    return count;
}

export default ticketCounter;
