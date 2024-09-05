// externos
import { Router } from "express";

//internos
import validacaoLinkMiddleware from "../Middlewares/validacaoLinkMiddleware.js";
import shortenController from "../Controllers/shortenController.js";


const shortenRouter = Router();

shortenRouter.post("/urls/shorten", 
    validacaoLinkMiddleware, 
    shortenController
);

export default shortenRouter;