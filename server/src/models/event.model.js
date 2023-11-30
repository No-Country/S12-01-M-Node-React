import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    event_management: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    categories: {
        type: String,
        enum: [
            'Music',
            'Nightlife',
            'Art',
            'Holidays',
            'Health',
            'Hobbies',
            'Business',
            'Gastronomy',
        ],
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date_of_event: {
        type: Date,
        required: true,
    },
    stock_tickets: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    image: {
        type: String,
    },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
