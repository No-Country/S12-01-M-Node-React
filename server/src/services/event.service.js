import Event from '../models/event.model.js';
import userModel from '../models/user.model.js';
import urlJoin from 'url-join';

export const saveFavoriteEventService = async (userid, eventid) => {
    try {
        let res = false;
        const event = await Event.findOne({ _id: eventid });
        if (!event) throw new Error(`Couldn't find event, please try again.`);

        const user = await userModel.findOneAndUpdate(
            {
                _id: userid,
            },
            {
                $addToSet: { favorites: event._id },
            },
            {
                new: true,
            },
        );

        if (!user)
            throw new Error(
                `Couldn't save event to favorites, please try again.`,
            );

        res = true;
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const generateEventLinkService = (eventId) => {
    try {
        const baseUrl = 'https://eventry-one.vercel.app/eventos';
        const eventPath = `/events/${eventId}`;

        const eventLink = urlJoin(baseUrl, eventPath);
        return eventLink;
    } catch (error) {
        throw new Error(`Error generating event link: ${error.message}`);
    }
};
