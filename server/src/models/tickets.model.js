import mongoose from 'mongoose';
import ticketCounter from '../helpers/referenceCount.js';

const ticketSchema = new mongoose.Schema({
    reference_number: {
        type: String,
    },
    event_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    event_date: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
}, {});


ticketSchema.pre('save', async function(next) {
    let count = await ticketCounter()
    const ticket = this;
    ticket.reference_number = count.toString();
    next()
})

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
