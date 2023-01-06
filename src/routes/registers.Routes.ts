import { Router } from "express";
import { createRegistersController, deleteRegisterController, listRegistersController } from "../controllers/registers.controllers";

const registerRoutes = Router()

registerRoutes.post('', createRegistersController)
registerRoutes.get('', listRegistersController)
registerRoutes.delete('/:id', deleteRegisterController)

export default registerRoutes