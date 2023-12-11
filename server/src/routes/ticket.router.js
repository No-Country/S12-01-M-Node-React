import { Router } from "express"
import passport from "passport";
import { createController, getController } from "../controllers/tickets.controller.js";
import { createTicketValidate } from "../helpers/validators/tickets/create.validator.js";
import { getTicketValidate } from "../helpers/validators/tickets/get.validator.js";

const router = Router();

// Get single tocket by it's id and it's user id
// router.get('/:userid/:ticketid', passport.authenticate('jwt', { session: false }), createController);

// Get all tickets by it's user id
// params: userid  (ObjectId string)
router.get('/:userid/all', passport.authenticate('jwt', { session: false }), getTicketValidate, getController); 

// Create new ticket by user id
// params: userid  (ObjectId string)
// query: ?event=   (String)
router.post('/:userid', passport.authenticate('jwt', { session: false }), createTicketValidate, createController);

export default router;
