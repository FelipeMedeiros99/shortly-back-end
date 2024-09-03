import dotenv from "dotenv";
import bcrypt from "bcrypt";

export default async function criptografarSenha(senha){
    dotenv.config();
    const {SALTOS} = process.env;
    const senhaCriptografada = await bcrypt.hash(senha, Number(SALTOS));
    return senhaCriptografada
};