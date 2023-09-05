import { Response, Request, NextFunction } from 'express';
import * as Joi from 'joi';

export default class RecipeValidation {
  static validationPayload = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().pattern(/(Meals|Drinks)/).required().messages({ 
      'string.pattern.base': 'The type must be "Meals" or "Drinks".'
    }),
    categoryId: Joi.number().integer().min(1).required(),
    areaId: Joi.number().integer().min(1),
    instructions: Joi.string().required(),
    thumb: Joi.string().required(),
    tags: Joi.string(),
    youtube: Joi.string(),
    ingredients: Joi.array().items(Joi.object({
      id: Joi.number().min(1).required(),
      measure: Joi.string(),
    })).required(),
  });

  static validate(req: Request, res: Response, next: NextFunction) {
    const { error } = RecipeValidation.validationPayload.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    return next();
  }
}
