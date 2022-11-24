import express, { Application, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import configs from './configs';
import logger from './middlewares/logger';
import user_routes_controller from './controllers/Users';

// Express App
export const app: Application = express();
export const port: number = configs.port || 8080;

const corsOptions = {
  origin: '*',
  successStatus: 200,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'HEAD']
};

// App Middlewares
app.use(cors());
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

// Routes
user_routes_controller(app, logger as NextFunction);

// App Server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port} ..`);
  console.log('Press CTRL+C to stop the server.');
});
