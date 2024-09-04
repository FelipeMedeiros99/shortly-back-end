// externos
import express from 'express';

// interno
import rotaPrincipal from './Routes/rotaPrincipal.js';

const App = express();

App.use(rotaPrincipal);

App.listen(5000, ()=>console.log("servidor funcionando"));
