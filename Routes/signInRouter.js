// externo
import { Router } from "express";

// local
import buscarUsuarioNoBancoMiddleware from "../Middlewares/buscarUsuarioNoBancoMiddleware.js"
import validacaoDadosLoginMiddleware from "../Middlewares/validacaoDadosLoginMiddleware.js";
import validarSenhaMiddleware from "../Middlewares/validarSenhaMiddleware.js";
const signInRouter = Router();

signInRouter.post("/signin", 
    validacaoDadosLoginMiddleware,
    buscarUsuarioNoBancoMiddleware,
    validarSenhaMiddleware,
    (req, res)=>{
        res.sendStatus(200);
    }
)

export default signInRouter;