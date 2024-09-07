// externo
import {Router} from "express";
import {json} from 'express';
import cors from "cors";

// local
import signUpRouter from './signUpRouter.js';
import signInRouter from "./signInRouter.js";
import shortenRouter from "./shortenRouter.js";
import buscarLinkRouter from "./buscarLinkRouter.js";
import deletarLinkRouter from "./deletarLinkRouter.js";
import abrirLinkRouter from "./abrirLinkRouter.js";

const mainRouter = Router();

// configurações
mainRouter.use(json());
mainRouter.use(cors());

// rotas
mainRouter.use(signUpRouter);
mainRouter.use(signInRouter);
mainRouter.use(shortenRouter);
mainRouter.use(buscarLinkRouter);
mainRouter.use(deletarLinkRouter);
mainRouter.use(abrirLinkRouter);

export default mainRouter;