// externo
import {Router} from "express";
import {json} from 'express';
import cors from "cors";

// local
import signUpRouter from '../Routes/signUpRouter.js';
import signInRouter from "./signInRouter.js";


const rotaPrincipal = Router();

// configurações
rotaPrincipal.use(json());
rotaPrincipal.use(cors());

// rotas
rotaPrincipal.use(signUpRouter);
rotaPrincipal.use(signInRouter);

export default rotaPrincipal;