// controlador para medicamentos

import { medicamentoModel } from "../../models/medicamentos/medicamento.model.js";

// Obtener todos los medicamentos
export const getMedicamentos = async (req, res) => {
  try {
    const results = await medicamentoModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error en el sistema " + error,
    });
  }
};

// Obtener medicamento por ID
export const getMedicamentoId = async (req, res) => {
  try {
    const results = await medicamentoModel.findById(req.params.id);

    if (!results || results.length === 0) {
      return res.status(404).json({
        error: "Medicamento no encontrado",
      });
    }

    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar medicamento por ID " + error,
    });
  }
};

// Crear medicamento
export const createMedicamento = async (req, res) => {
  const { nombre, descripcion, stock, precio_unitario } = req.body;

  // Validar campos obligatorios
  if (!nombre || !descripcion || stock == null || precio_unitario == null) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios",
    });
  }

  // Validar que stock y precio sean números
  if (isNaN(stock) || isNaN(precio_unitario)) {
    return res.status(400).json({
      error: "Stock y precio_unitario deben ser numéricos",
    });
  }

  const data = {
    nombre: nombre.trim(),
    descripcion: descripcion.trim(),
    stock: parseInt(stock),
    precio_unitario: parseInt(precio_unitario),
  };

  try {
    const results = await medicamentoModel.create(data);

    res.status(201).json({
      message: "Medicamento creado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al insertar medicamento",
    });
  }
};

// Eliminar medicamento
export const deleteMedicamento = async (req, res) => {
  try {
    const results = await medicamentoModel.delete(req.params.id);

    res.json({
      message: "Medicamento eliminado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar medicamento " + error,
    });
  }
};

// Actualizar medicamento
export const updateMedicamento = async (req, res) => {
  const { nombre, descripcion, stock, precio_unitario } = req.body;

  if (!nombre || !descripcion || stock == null || precio_unitario == null) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios",
    });
  }

  if (isNaN(stock) || isNaN(precio_unitario)) {
    return res.status(400).json({
      error: "Stock y precio_unitario deben ser numéricos",
    });
  }

  try {
    const results = await medicamentoModel.update(req.params.id, {
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      stock: parseInt(stock),
      precio_unitario: parseInt(precio_unitario),
    });

    res.json({
      message: "Medicamento actualizado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al actualizar medicamento " + error,
    });
  }
};
