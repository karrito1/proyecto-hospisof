// controlador para paciente

import { pacienteModel } from "../../models/paciente/paciente.model.js";

// Obtener todos los pacientes
export const getPacientes = async (req, res) => {
  try {
    const results = await pacienteModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error en el sistema" + error,
    });
  }
};

// Obtener paciente por ID
export const getPacienteId = async (req, res) => {
  try {
    const results = await pacienteModel.finById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar paciente por ID" + error,
    });
  }
};

// Crear paciente
export const createPaciente = async (req, res) => {
  const data = {
    NumeroDocumento: req.body.NumeroDocumento,
    fechaNacimiento: req.body.fechaNacimiento,
    nombre: req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono,
  };

  try {
    const results = await pacienteModel.create(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al insertar paciente",
    });
  }
};

// Eliminar paciente
export const deletepaciente = async (req, res) => {
  try {
    const results = await pacienteModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar paciente" + error,
    });
  }
};

// Actualizar paciente
export const updatepaciente = async (req, res) => {
  try {
    const results = await pacienteModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al actualizar paciente" + error,
    });
  }
};
