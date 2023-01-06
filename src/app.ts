import cors from 'cors';
import express from "express"
import registerRoutes from "./routes/registers.Routes"

const app = express()

app.use(express.json())

app.use(cors())

app.use('/registers', registerRoutes)

export default app
