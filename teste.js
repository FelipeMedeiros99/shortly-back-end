import jwt from "jsonwebtoken";

const meuObjeto = {nome: "felipe", idade:20}

const criptografia = jwt.sign(meuObjeto, 'minhaChaveUltraSecreta', {
    expiresIn: 5
})

setInterval(()=>{
    const validacaoToken = jwt.verify(criptografia, 'minhaChaveUltraSecreta')
    console.log(validacaoToken)
}, 1000)




