import {param,check,query, validationResult} from 'express-validator'

export const validateCreateEvents = [
    check("name")
            .exists()
            .notEmpty()
            .withMessage("El campo nombre es obligatorio"),
            (req,res,next) =>{
                try{
                    validationResult(req).throw();
                    return next();
                }catch(err){
                    res.status(403);
                    res.send({errors : err.array()});
                }
            }
]

export const validateDeleteEvents = [
    param("_id").exists(),
    (req,res,next) =>{
        try{
            validationResult(req).throw()
            return next()
        }catch(err){
            res.status(403);
            res.send({errors : err.array()})
        }
    }
]