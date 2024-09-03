import { Router } from "express";

const signUp = Router();

signUp.post("/signup", async (req, res)=>{
    res.send(200)
})


export default signUp;