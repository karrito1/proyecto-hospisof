// las rutas del modulo medicamento

import { Router } from "express";
import * as MedicamentoCTR from "../controllers/medicamento.controller.js";
const router = Router();

router.get("/Medicamento/listarTodos", MedicamentoCTR.getMedicamentos);
router.get("/Medicamento/listarId/:id", MedicamentoCTR.getMedicamentoId);
router.post("/Medicamento/crearMedicamento", MedicamentoCTR.createMedicamento);
router.put("/Medicamento/eliminarId/:id", MedicamentoCTR.deleteMedicamento);
router.put(
  "/Medicamento/actualizarMedicamento/:id",
  MedicamentoCTR.updateMedicamento,
);

export default router;
