import express, {json} from 'express';
import cors from "cors";

// local
import signUpRouter from './Routes/signUpRouter.js';

const App = express();

App.use(json());
App.use(cors());
App.use(signUpRouter)

App.listen(5000, ()=>console.log("servidor funcionando"));
