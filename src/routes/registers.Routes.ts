import { Router } from "express";
import { createRegistersController, deleteRegisterController, listRegistersController } from "../controllers/registers.controllers";
import { isAuthorized } from "../middlewares/isAuth";

const registerRoutes = Router()

registerRoutes.post('', isAuthorized, createRegistersController)
registerRoutes.get('', isAuthorized, listRegistersController)
registerRoutes.delete('/:id', isAuthorized, deleteRegisterController)

export default registerRoutes