import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    reference_number: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    event_date: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
