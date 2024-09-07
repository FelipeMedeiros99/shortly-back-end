// externos
import { Router } from "express";

//internos


const modelo = Router();

modelo.post("/link",
    (req, res)=>{res.sendStatus(200)} 
);

export default modelo;