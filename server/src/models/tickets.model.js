import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    reference_number: {
        type: String,
        required: true,
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
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
