import Event from '../models/event.model.js';
import { saveFavoriteEventService } from '../services/event.service.js';

export const allEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Error getting events' });
    }
};

export const eventsById = async (req, res) => {
    const { _id } = req.params;
    try {
        const event = await Event.findById(_id);
        if (!event) {
            res.status(404).json({ error: 'Event not found' });
        } else {
            res.status(200).json(event);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error getting event' });
    }
};

export const createEvents = async (req, res) => {
    try {
        const eventData = req.body;

        const newEvent = new Event(eventData);

        await newEvent.save();

        res.status(200).json(newEvent);
    } catch (error) {
        res.status(500).json({ error: 'Error creating event' });
    }
};

export const updateEvents = async (req,res) => {
    try{
        const _id = req.params;
        const updatedata = req.body;

        const updateEvent = await Event.findByIdAndUpdate(_id,updatedata,{
            new:true,
        });

        if (!updateEvent) {
            return res.status(404).json({error : "Event not found"});
        }else{
            res.status(200).json({ message : "Successfully updated event"});
        }

    }catch(error){
        res.status(500).json({error:"Error updating event"});
    }
}

export const deleteEvents = async (req,res) => {
    try{
        const _id = req.params ; 

        const deleteEvent = await Event.findByIdAndDelete(_id);

        if (!deleteEvent) {
            return res.status(404).json({error : "Event not found"});
        }else{
            res.status(200).json({message : "Successfully deleted event"});
        }
    }catch(error){
        res.status(500).json({error : "Error deleting event"});
    }
}

// Filtres :

export const eventsByCategories = async (req,res) =>{
    try{
        const {categories} = req.params;

        const event = await Event.find({categories : categories});

        if (event) {
            res.status(200).json(event);
        }else{
            res.status(404).send({message : "Events not found"});
        }
    }catch(error){
        res.status(500).send({ message : "Events not found"})
    }
}

export const eventsByLocation = async (req,res) =>{
    try{
        const {location} = req.params;

        const event = await Event.find({location : location});

        if (event) {
            res.status(200).json(event);
        }else{
            res.status(404).send({message : "Events not found"})
        }
    }catch(error){
        res.status(500).send({ message : "Events not found "});
    }
}

export const eventsByPrices = async (req,res) =>{
    try{
        const {price} = req.params;

        const event = await Event.find({price : price });

        if (event) {
            res.status(200).json(event);
        }else{
            res.status(404).send({message : "Events not found"})
        }
    }catch(error){
        res.status(500).send({ message : "Events not found "});
    }
}

export const saveFavoriteEventController = async (req, res) => {
    try {
        const { userid, eventid } = req.params;
        const savedFavorite = await saveFavoriteEventService(userid, eventid);

        if (!savedFavorite) throw new Error(`Couldn't save event to favorites, please try again`);

        return res.status(200).json({ message: `Favorite saved` })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
