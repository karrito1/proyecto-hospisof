// las rutas del modulo paciente

import { Router } from "express";
import * as pacientesCTR from "../controllers/paciente.controller.js";
const router = Router();

router.get("/paciente/listarTodos", pacientesCTR.getPacientes);
router.get("/paciente/listarId/:id", pacientesCTR.getPacienteId);
router.post("/paciente/crearPaciente", pacientesCTR.createPaciente);
router.put("/paciente/eliminarId/:id", pacientesCTR.deletepaciente);
router.put(
  "/paciente/actualizarPaciente/:id",
  pacientesCTR.updatepaciente
);

export default router;
