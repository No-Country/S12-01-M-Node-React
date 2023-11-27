/* import {catchASync} from "../helpers/catchAsycn.js  "
import {success} from "../helpers/serverResponses.js"
import  */

import loginUser from "../services/user.service.js";
import catchASync from "../helpers/catchAsycn.js  "
import success from "../helpers/serverResponses.js"

export const loginUsers =  catchASync(async (req, res) =>{
    const {email, password} = req.body;
    const result = await loginUser(email, password);
    success({
        res,
        message: 'User logged in successfully',
        data: result,
        status: 200
    })
})





export const register = () => {
   try {
    success({
        res,
        message: 'User logged in successfully',
        data: result,
        status: 200
    })
   } catch (error) {
    error({
        res,
        message : "user register failed",
        status: 404
    })
   }
}