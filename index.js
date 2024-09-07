// externos
import express from 'express';

// interno
import mainRouter from './Routes/mainRouter.js';
import removerTokensInativos from './Utils/removerTokensInativos.js';

const App = express();

// configuração de rota
App.use(mainRouter);

// remover token inativos a cada 1 minuto
setInterval(removerTokensInativos, 1000*60);

App.listen(5000, ()=>console.log("servidor funcionando"));
