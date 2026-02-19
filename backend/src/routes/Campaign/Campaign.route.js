// las rutas del modulo campaña

import { Router } from "express";
import * as CampaignCTR from "../../controllers/Campaign/Campaign.controller.js";

const router = Router();

// Rutas del modelo campaña

// Obtener todas las campañas
router.get("/Campaign/listarTodos", CampaignCTR.getCampañas);

// Obtener campaña por ID
router.get("/Campaign/listarId/:id", CampaignCTR.getCampañaId);

// Crear campaña
router.post("/Campaign/crearCampaign", CampaignCTR.createCampaña);

// Eliminar campaña por ID
router.delete("/Campaign/eliminarId/:id", CampaignCTR.deleteCampaña);

// Actualizar campaña por ID
router.put(
  "/Campaign/actualizarCampaign/:id",
  CampaignCTR.updateCampaña
);

export default router;
