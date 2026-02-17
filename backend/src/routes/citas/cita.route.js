// las rutas del modulo cita

import { Router } from "express";
import * as citasCTR from "../../controllers/citas/cita.controller.js";

const router = Router();

// Rutas del modelo cita

// Obtener todas las citas
router.get("/cita/listarTodos", citasCTR.getCitas);

// Obtener cita por ID
router.get("/cita/listarId/:id", citasCTR.getCitaId);

// Crear cita
router.post("/cita/crearCita", citasCTR.createCita);

// Eliminar cita por ID
router.delete("/cita/eliminarId/:id", citasCTR.deleteCita);

// Actualizar cita por ID
router.put(
  "/cita/actualizarCita/:id",
  citasCTR.updateCita
);

export default router;
