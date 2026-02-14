// src/routes/usuario.route.js
import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller.js";
const router = Router();
router.post("/usuario/crear", usuarioController.createUsuario);
router.put("/usuario/editar/:id", usuarioController.updateUsuario);
router.delete("/usuario/eliminar/:id", usuarioController.deleteUsuario);
router.get("/usuario/listartodos", usuarioController.getUsuarios);
router.post("/usuario/listarporid/:id", usuarioController.getUsuarioById);

export default router;
