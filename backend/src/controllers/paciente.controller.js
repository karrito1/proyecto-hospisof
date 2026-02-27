// controlador para paciente
import { pacienteModel } from "../models/paciente.model.js";

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

export const getPacienteId = async (req, res) => {
  try {
    const results = await pacienteModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar paciente por ID" + error,
    });
  }
};

export const createPaciente = async (req, res) => {
  const { NumeroDocumento, fechaNacimiento, nombre, correo, telefono } =
    req.body;

  if (!NumeroDocumento || !fechaNacimiento || !nombre || !correo) {
    return res.status(400).json({
      error: "Todos los campos obligatorios deben ser enviados",
    });
  }

  try {
    const data = {
      NumeroDocumento,
      fechaNacimiento,
      nombre,
      correo,
      telefono,
    };

    const results = await pacienteModel.create(data);

    return res.status(201).json({
      message: "Paciente creado correctamente",
      results,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Ocurrió un error al insertar paciente",
    });
  }
};

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
