// externos
import { Router } from "express";

//internos
import validarTokenUsuarioMiddleware from "../Middlewares/validarTokenUsuarioMiddleware.js"
import informacoesUsuarioController from "../Controllers/informacoesUsuarioController.js";

const informacoesUsuarioRouter = Router();

informacoesUsuarioRouter.get("/users/me",
    validarTokenUsuarioMiddleware,
    informacoesUsuarioController
);

export default informacoesUsuarioRouter;