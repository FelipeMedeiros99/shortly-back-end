// externo
import {Router} from "express";
import {json} from 'express';
import cors from "cors";

// local
import signUpRouter from '../Routes/signUpRouter.js';
import signInRouter from "./signInRouter.js";
import shortenRouter from "./shortenRouter.js";


const rotaPrincipal = Router();

// configurações
rotaPrincipal.use(json());
rotaPrincipal.use(cors());

// rotas
rotaPrincipal.use(signUpRouter);
rotaPrincipal.use(signInRouter);
rotaPrincipal.use(shortenRouter);

export default rotaPrincipal;