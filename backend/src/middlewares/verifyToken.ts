import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import configs from '../configs';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization as string;
    const token = authorization?.split(' ')[1];
    const decode = jwt.verify(token, configs.token as string);
    if (decode) {
      next();
    }
  } catch (err) {
    res.status(400).json({
      status: false,
      message: `Invalid token. ${(err as Error).message}`
    });
  }
};
export default verifyToken;
