// externo 
import { Router } from "express";

// interno
import buscarLinkController from "../Controllers/buscarLinkController.js";
import localizarLinkMiddleware from "../Middlewares/localizarLinkMiddleware.js";


const buscarLinkRouter = Router();

buscarLinkRouter.get("/urls/:id", 
    localizarLinkMiddleware,
    buscarLinkController)

export default buscarLinkRouter;