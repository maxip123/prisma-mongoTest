import { Router } from "express";
import Animales from './Animal.routes.js';

const ruta= Router();
ruta.use('/animales', Animales);
export default ruta;