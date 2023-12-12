import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    categories: {
        type: String,
        enum: [
            'Musica',
            'Vida nocturna',
            'Artes escenicas',
            'Gastronomia',
            'Negocios',
            'Comunidad',
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
