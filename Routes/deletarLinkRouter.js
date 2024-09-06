// externo 
import { Router } from "express";

// interno
import validarTokenUsuarioMiddleware from "../Middlewares/validarTokenUsuarioMiddleware.js";
import deletarLinkController from "../Controllers/deletarLinkController.js";


const deletarLinkRouter = Router();

deletarLinkRouter.delete(
    "/urls/:id", 
    validarTokenUsuarioMiddleware,
    deletarLinkController)

export default deletarLinkRouter;