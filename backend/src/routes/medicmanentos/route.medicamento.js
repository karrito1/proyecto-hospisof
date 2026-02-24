// las rutas del modulo medicamento

import { Router } from "express";
import * as MedicamentoCTR from "../../controllers/medicamentos/medicamento.controller.js";

const router = Router();

// Rutas del modelo medicamento

// Obtener todos los medicamentos
router.get("/Medicamento/listarTodos", MedicamentoCTR.getMedicamentos);

// Obtener medicamento por ID
router.get("/Medicamento/listarId/:id", MedicamentoCTR.getMedicamentoId);

// Crear medicamento
router.post("/Medicamento/crearMedicamento", MedicamentoCTR.createMedicamento);

// Eliminar medicamento por ID
router.put("/Medicamento/eliminarId/:id", MedicamentoCTR.deleteMedicamento);

// Actualizar medicamento por ID
router.put(
  "/Medicamento/actualizarMedicamento/:id",
  MedicamentoCTR.updateMedicamento
);

export default router;
