// modulos externos
import { Router } from "express";

// modulos internos
import signUpController from "../Controllers/signUpController";


// rota de cadastro
const signUpRouter = Router();
signUpRouter.post("/signup", signUpController);

export default signUpRouter;