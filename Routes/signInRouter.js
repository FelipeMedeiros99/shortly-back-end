// externo
import { Router } from "express";

// local
import buscarUsuarioNoBancoMiddleware from "../Middlewares/buscarUsuarioNoBancoMiddleware.js"
import validacaoDadosLoginMiddleware from "../Middlewares/validacaoDadosLoginMiddleware.js";
import validarSenhaMiddleware from "../Middlewares/validarSenhaMiddleware.js";
import signInController from "../Controllers/signInController.js";
import criarTokenUsuarioMiddleware from "../Middlewares/criarTokenUsuarioMiddleware.js";
import armazenarTokenMiddleware from "../Middlewares/armazenarTokenMiddleware.js";


const signInRouter = Router();

signInRouter.post("/signin", 
    validacaoDadosLoginMiddleware,
    buscarUsuarioNoBancoMiddleware,
    validarSenhaMiddleware,
    criarTokenUsuarioMiddleware,
    armazenarTokenMiddleware,
    signInController
)

export default signInRouter;