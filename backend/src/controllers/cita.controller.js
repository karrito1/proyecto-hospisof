// controlador para citas

import { citaModel } from "../models/cita.model.js";

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

export const createCita = async (req, res) => {
  const { fecha, paciente_id, usuario_id } = req.body;

  let { estado } = req.body;

  const estadosValidos = ["programada", "cancelada", "atendida"];

  if (!fecha || !estado || !paciente_id || !usuario_id) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios",
    });
  }

  estado = estado.toLowerCase().trim();

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
