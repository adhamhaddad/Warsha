import {Request, Response} from 'express';
import path from 'path';

export const main =  async (req: Request , res: Response): Promise<void> => {
    res.status(200).sendFile(path.join(__dirname, "../public/html/main.html"));
}

export const users = async (req: Request, res: Response): Promise<void> => {
    res.status(200).sendFile(path.join(__dirname, "../public/html/users.html"));
}

export const profile = async (req: Request, res: Response): Promise<void> => {
    res.status(200).sendFile(path.join(__dirname, "../public/html/profile.html"));
}