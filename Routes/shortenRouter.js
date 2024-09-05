// externos
import { Router } from "express";

//internos
import validacaoLinkMiddleware from "../Middlewares/validacaoLinkMiddleware.js";
import shortenController from "../Controllers/shortenController.js";
import validarTokenUsuarioMiddleware from "../Middlewares/validarTokenUsuarioMiddleware.js";


const shortenRouter = Router();

shortenRouter.post("/urls/shorten", 
    validacaoLinkMiddleware, 
    validarTokenUsuarioMiddleware,
    shortenController
);

export default shortenRouter;