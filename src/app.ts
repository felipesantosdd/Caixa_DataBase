import cors from 'cors';
import express from "express"
import { handleError } from './middlewares/handleError';
import loginRoutes from './routes/login.Routes';
import registerRoutes from "./routes/registers.Routes"
import userRoutes from './routes/user.Routes';

const app = express()

app.use(express.json())

app.use(cors())

app.use('/registers', registerRoutes)
app.use('/user', userRoutes)
app.use('/login', loginRoutes)

app.use(handleError);

export default app