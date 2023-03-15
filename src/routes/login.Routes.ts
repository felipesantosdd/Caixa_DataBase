import { Router } from "express";
import { loginController, tokenValidation } from "../controllers/session.controllers";

const loginRoutes = Router()

loginRoutes.post('', loginController)
loginRoutes.post('/validation', tokenValidation)

export default loginRoutes