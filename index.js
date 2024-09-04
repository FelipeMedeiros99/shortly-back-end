// externos
import express from 'express';

// interno
import rotaPrincipal from './Routes/rotaPrincipal.js';
import removerTokensInativos from './Utils/removerTokensInativos.js';

const App = express();

// configuração de rota
App.use(rotaPrincipal);

// remover token inativos a cada 1 minuto
setInterval(removerTokensInativos, 1000*60);

App.listen(5000, ()=>console.log("servidor funcionando"));
