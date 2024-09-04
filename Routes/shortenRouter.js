import { Router } from "express";

const shortenRouter = Router();

shortenRouter.post("/urls/shorten", (req, res)=>{
    res.sendStatus(200)
});

export default shortenRouter;