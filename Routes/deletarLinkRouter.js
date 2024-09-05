// externo 
import { Router } from "express";

// interno
import buscarLinkController from "../Controllers/buscarLinkController.js";
import localizarLinkMiddleware from "../Middlewares/localizarLinkMiddleware.js";
import validarTokenUsuarioMiddleware from "../Middlewares/validarTokenUsuarioMiddleware.js";


const deletarLinkRouter = Router();

deletarLinkRouter.delete("/urls/:id", 
    validarTokenUsuarioMiddleware,
    localizarLinkMiddleware,
    buscarLinkController)

export default deletarLinkRouter;