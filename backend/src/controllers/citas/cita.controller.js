// controlador para citas

import { citaModel } from "../../models/citas/cita.model.js";

// Obtener todas las citas
export const getCitas = async (req, res) => {
  try {
    const results = await citaModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error en el sistema " + error,
    });
  }
};

// Obtener cita por ID
export const getCitaId = async (req, res) => {
  try {
    const results = await citaModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar cita por ID " + error,
    });
  }
};

// Crear cita
export const createCita = async (req, res) => {
  const { fecha, paciente_id, usuario_id } = req.body;

  let { estado } = req.body;

  const estadosValidos = ["programada", "cancelada", "atendida"];

  // Validar campos obligatorios
  if (!fecha || !estado || !paciente_id || !usuario_id) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios",
    });
  }

  // Convertir estado a minúsculas y quitar espacios
  estado = estado.toLowerCase().trim();

  // Validar estado
  if (!estadosValidos.includes(estado)) {
    return res.status(400).json({
      error: "Estado no válido. Debe ser: programada, cancelada o atendida",
    });
  }

  const data = {
    fecha,
    estado, 
    paciente_id,
    usuario_id,
  };

  try {
    const results = await citaModel.create(data);

    res.status(201).json({
      message: "Cita creada correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al insertar cita",
    });
  }
};

// Eliminar cita
export const deleteCita = async (req, res) => {
  try {
    const results = await citaModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar cita " + error,
    });
  }
};

// Actualizar cita
export const updateCita = async (req, res) => {
  try {
    const results = await citaModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al actualizar cita " + error,
    });
  }
};
