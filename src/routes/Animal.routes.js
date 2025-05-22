import { Router } from "express";
import {getAllAnimales,createAnimal} from "../controller/animales.controller.js";
const router =  Router()

router.get("/",getAllAnimales)
router.post("/",createAnimal)

export default router;