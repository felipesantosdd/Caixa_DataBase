import { Router } from "express";
import { loginController } from "../controllers/session.controllers";

const loginRoutes = Router()

loginRoutes.post('', loginController)

export default loginRoutes