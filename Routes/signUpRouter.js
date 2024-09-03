// externo
import { Router } from "express";

// interno 
import validacaoDadosMiddleware from "../Middlewares/validacaoDadosMiddleware.js";
import signUpController from "../Controllers/signUpController.js"
import criptografarSenhaMiddleware from "../Middlewares/criptografarSenhaMiddleware.js";


const signUpRouter = Router();

signUpRouter.post("/signup", 
    validacaoDadosMiddleware,
    criptografarSenhaMiddleware,    
    signUpController)


export default signUpRouter;