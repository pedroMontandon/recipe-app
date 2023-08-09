import { NextFunction, Request, Response } from 'express';

export default class TypeVerification {
  
  static verifyType (req: Request, res: Response, next: NextFunction) {
    const type = req.baseUrl.includes('meals') ? 'Meals' : 'Drinks';

    res.locals.type = type;

    return next();
  }
}

