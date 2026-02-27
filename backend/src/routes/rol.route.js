// las rutas del modulo cita

import { Router } from "express";
import * as rolCtr from "../controllers/rol.controler.js";
const router = Router();
router.get("/rol/listarId/:id", rolCtr.getRolesID);
router.get("/rol/listartodos", rolCtr.getRolesTodos);
export default router;
// Rutas de rol
