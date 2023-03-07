import { Request, Response, NextFunction, Application } from 'express';
import jwt from 'jsonwebtoken';
import configs from '../configs';
import verifyToken from '../middlewares/verifyToken';
import User from '../model/User';
import fs from 'fs';
import path from 'path';

const user = new User();

const createUser = async (req: Request, res: Response) => {
  try {
    const response = await user.createUser(req.body);
    res.status(201).json({
      status: true,
      data: { ...response },
      message: 'User created successfully!'
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: (err as Error).message
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const response = await user.getUser(req.body);
    res.status(200).json({
      status: true,
      data: { ...response },
      message: 'User received successfully!'
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: (err as Error).message
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const response = await user.getUsers();
    res.status(200).json({
      status: true,
      data: response,
      message: 'Users received successfully!'
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: (err as Error).message
    });
  }
};

const authenticate = async (req: Request, res: Response) => {
  try {
    const response = await user.authenticate(req.body);
    if (!response) {
      return res.status(400).json({
        status: false,
        message: 'Username or password is incorrect'
      });
    }

    fs.readFile(
      path.join(__dirname, '..', 'keys', 'private.key'),
      { encoding: 'utf8' },
      (err, privateKey) => {
        if (err) err.message;
        jwt.sign(
          { ...response },
          privateKey,
          { algorithm: 'RS256' },
          (err, token) => {
            if (err) err.message;
            res.status(201).json({
              status: true,
              date: { ...response, token },
              message: 'User authenticated successfully!'
            });
          }
        );
      }
    );
  } catch (err) {
    res.status(400).json({
      status: false,
      message: (err as Error).message
    });
  }
};

const user_routes_controller = (app: Application, logger: NextFunction) => {
  app.post('/users', logger, createUser);
  app.get('/users', logger, verifyToken, getUsers);
  app.get('/users/:id', logger, verifyToken, getUser);
  app.post('/authenticate', logger, authenticate);
};
export default user_routes_controller;
