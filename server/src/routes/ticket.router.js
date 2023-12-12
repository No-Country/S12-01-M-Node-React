import { Router } from "express"
import passport from "passport";
import { createTicketController, getController, getSingleTicketController } from "../controllers/tickets.controller.js";
import { createTicketValidate } from "../helpers/validators/tickets/create.validator.js";
import { getTicketValidate } from "../helpers/validators/tickets/get.validator.js";
import { getSingleTicketValidate } from "../helpers/validators/tickets/single.validator.js";

const router = Router();

// Get single tocket by it's id and it's user id
// params: userid  (ObjectId string)
// params: reference   (UUID string)
router.get('/:userid/:reference', passport.authenticate('jwt', { session: false }), getSingleTicketValidate, getSingleTicketController);

// Get all tickets by it's user id
// params: userid  (ObjectId string)
router.get('/:userid', passport.authenticate('jwt', { session: false }), getTicketValidate, getController); 

// Create new ticket by user id
// params: userid  (ObjectId string)
// query: ?event=   (String)
router.post('/:userid', passport.authenticate('jwt', { session: false }), createTicketValidate, createTicketController);

export default router;
