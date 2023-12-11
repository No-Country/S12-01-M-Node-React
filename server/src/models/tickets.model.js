import mongoose from 'mongoose';
import crypto from 'crypto';

const ticketSchema = new mongoose.Schema({
    reference_number: {
        type: mongoose.Schema.Types.UUID,
        default: () => crypto.randomUUID(),
    },
    event_name: {
        type: String,
        required: true,
    },
    event_date: {
        type: String,
        required: true,
    },
}, {});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
