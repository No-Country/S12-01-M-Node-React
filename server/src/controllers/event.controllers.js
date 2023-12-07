import Event from '../models/event.model.js';

export const allEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los eventos' });
    }
};

export const eventsById = async (req, res) => {
    const { _id } = req.params;
    try {
        const event = await Event.findById(_id);
        if (!event) {
            res.status(404).json({ error: 'Evento no encontrado ' });
        } else {
            res.status(200).json(event);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el evento ' });
    }
};

export const createEvents = async (req, res) => {
    try {
        const eventData = req.body;

        const newEvent = new Event(eventData);

        await newEvent.save();

        res.status(200).json(newEvent);
    } catch (error) {
        res.status(500).json({ error: 'error al crear el evento' });
    }
};
