import { NextFunction, Request, Response } from 'express';

export default class UserValidation {
  static validateLogin (req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    next();
  }
}

