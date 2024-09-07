// externos
import { Router } from "express";

//internos
import rankingController from "../Controllers/rankingController.js";


const rankingRouter = Router();

rankingRouter.get("/ranking",
    rankingController 
);

export default rankingRouter;