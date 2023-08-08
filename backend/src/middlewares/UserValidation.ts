import { NextFunction, Request, Response } from 'express';
import Joi = require('joi');

export default class UserValidation {
  
  static validateLogin (req: Request, res: Response, next: NextFunction) {
    const loginValidation = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    });

    const { error } = loginValidation.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    return next();
  }

  static validateSignUp (req: Request, res: Response, next: NextFunction) {
    const signUpValidation = Joi.object({
      email: Joi.string().email().required(),
      username: Joi.string().min(3).required(),
      password: Joi.string().min(6).required()
    });
    
    const { error } = signUpValidation.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    return next();
  }
}

