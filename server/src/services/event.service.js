import Event from "../models/event.model.js";
import userModel from "../models/user.model.js";

export const saveFavoriteEventService = async (userid, eventid) => {
    try {
        let res = false;
        const event = await Event.findOne({ _id: eventid });
        if (!event) throw new Error(`Couldn't find event, please try again.`);

        const user = await userModel.findOneAndUpdate({ 
            _id: userid 
        }, {
            $addToSet: { favorites: event._id }
        }, {
            new: true
        });

        if (!user) throw new Error(`Couldn't save event to favorites, please try again.`);

        res = true;
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}
