import express from 'express';
import cors from 'cors';
import router from './routes/index';
import './node_modules/@fortawesome/fontawesome-free/css/all.css';

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"))

// Routes
app.use("/users", router);

// express server
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});