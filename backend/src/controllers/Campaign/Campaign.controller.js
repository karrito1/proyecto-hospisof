// controlador para campañas

import { CampaignCTR } from "../../models/Campaign/Campaign.model.js";

// Obtener todas las campañas
export const getCampañas = async (req, res) => {
  try {
    const results = await CampaignCTR.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error en el sistema " + error,
    });
  }
};

// Obtener campaña por ID
export const getCampañaId = async (req, res) => {
  try {
    const results = await CampaignCTR.findById(req.params.id);

    if (!results) {
      return res.status(404).json({
        error: "Campaña no encontrada",
      });
    }

    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar campaña por ID " + error,
    });
  }
};

// Crear campaña
export const createCampaña = async (req, res) => {
  const { nombre, mensaje, fecha } = req.body;

  // Validar campos obligatorios
  if (!nombre || !mensaje || !fecha) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios",
    });
  }

  const data = {
    nombre: nombre.trim(),
    mensaje: mensaje.trim(),
    fecha,
  };

  try {
    const results = await CampaignCTR.create(data);

    res.status(201).json({
      message: "Campaña creada correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al insertar campaña",
    });
  }
};

// Eliminar campaña
export const deleteCampaña = async (req, res) => {
  try {
    const results = await CampaignCTR.delete(req.params.id);

    res.json({
      message: "Campaña eliminada correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar campaña " + error,
    });
  }
};

// Actualizar campaña
export const updateCampaña = async (req, res) => {
  const { nombre, mensaje, fecha } = req.body;

  if (!nombre || !mensaje || !fecha) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios",
    });
  }

  try {
    const results = await CampaignCTR.update(req.params.id, {
      nombre: nombre.trim(),
      mensaje: mensaje.trim(),
      fecha,
    });

    res.json({
      message: "Campaña actualizada correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al actualizar campaña " + error,
    });
  }
};
