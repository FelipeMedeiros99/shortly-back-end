// externos
import { Router } from "express";

//internos
import abrirLinkController from "../Controllers/abrirLinkController.js";

const abrirLinkRouter = Router();

abrirLinkRouter.get("/urls/open/:shortUrl",
    abrirLinkController
);

export default abrirLinkRouter;