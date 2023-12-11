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

export const updateEvents = async (req,res) => {
    try{
        const _id = req.params;
        const updatedata = req.body;

        const updateEvent = await Event.findByIdAndUpdate(_id,updatedata,{
            new:true,
        });

        if (!updateEvent) {
            return res.status(404).json({error : "Evento no encontrado"});
        }else{
            res.status(200).json({ message : "Evento actualizado existosamente ."});
        }

    }catch(error){
        res.status(500).json({error:"Error al actualizar el evento."});
    }
}

export const deleteEvents = async (req,res) => {
    try{
        const _id = req.params ; 

        const deleteEvent = await Event.findByIdAndDelete(_id);

        if (!deleteEvent) {
            return res.status(404).json({erro : "Evento no encontrado"});
        }else{
            res.status(200).json({message : "Evento eliminado existosamente"});
        }
    }catch(error){
        res.status(500).json({error : "Error al eliminar el evento"});
    }
}

// Filtres :

export const eventsByCategories = async (req,res) =>{
    try{
        const {categories} = req.params;

        const event = await Event.find({categories : categories});

        if (event) {
            res.status(200).send({message : "Eventos encontrados " , event : event});
        }else {
            res.status(400).status({message : "Eventos no encontrados "});
        }
    }catch(error){
        res.status(500).send({ message : "Eventos no encontrados "})
    }
}

export const eventsByLocation = async (req,res) =>{
    try{
        const {location} = req.params;

        const event = await Event.find({location : location});

        if (event) {
            res.status(200).send({message : "Eventos encontrados ", evento : event});
        }else{
            res.status(400).status({message : "Eventos no encontrados "})
        }
    }catch(error){
        
    }
}

export const eventsByPrices = async (req,res) =>{
    try{
        
    }catch(error){
        
    }
}

