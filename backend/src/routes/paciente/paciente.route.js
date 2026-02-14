// las rutas del modulo paciente

import { Router } from "express";
import * as pacientesCTR from "../../controllers/paciente/paciente.controller.js";

const router = Router();

// Rutas del modelo paciente

// Obtener todos los pacientes
router.get("/paciente/listarTodos", pacientesCTR.getPacientes);

// Obtener paciente por ID
router.get("/paciente/listarId/:id", pacientesCTR.getPacienteId);

// Crear paciente
router.post("/paciente/crearPaciente", pacientesCTR.createPaciente);

// Eliminar paciente por ID
router.delete("/paciente/eliminarId/:id", pacientesCTR.deletepaciente);

// Actualizar paciente por ID
router.put(
  "/paciente/actualizarPaciente/:id",
  pacientesCTR.updatepaciente
);

export default router;
