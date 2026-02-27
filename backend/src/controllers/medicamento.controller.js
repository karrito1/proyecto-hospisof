// controlador para medicamentos

import { medicamentoModel } from "../models/medicamento.model.js";

export const getMedicamentos = async (req, res) => {
  try {
    const results = await medicamentoModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error en el sistema",
    });
  }
};

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
      error: error.message || "Error al buscar medicamento",
    });
  }
};

export const createMedicamento = async (req, res) => {
  try {
    const { nombre, descripcion, stock, precio_unitario } = req.body;

    if (!nombre || !descripcion || stock == null || precio_unitario == null) {
      return res.status(400).json({
        error: "Todos los campos son obligatorios",
      });
    }

    if (Number.isNaN(Number(stock)) || Number.isNaN(Number(precio_unitario))) {
      return res.status(400).json({
        error: "Stock y precio_unitario deben ser numéricos",
      });
    }

    const data = {
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      stock: Number(stock),
      precio_unitario: Number(precio_unitario),
    };

    const results = await medicamentoModel.create(data);

    res.status(201).json({
      message: "Medicamento creado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error al insertar medicamento",
    });
  }
};

export const deleteMedicamento = async (req, res) => {
  try {
    const results = await medicamentoModel.delete(req.params.id);

    if (!results || results.affectedRows === 0) {
      return res.status(404).json({
        error: "Medicamento no encontrado",
      });
    }

    res.json({
      message: "Medicamento eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error al eliminar medicamento",
    });
  }
};

export const updateMedicamento = async (req, res) => {
  try {
    const { nombre, descripcion, stock, precio_unitario } = req.body;

    if (!nombre || !descripcion || stock == null || precio_unitario == null) {
      return res.status(400).json({
        error: "Todos los campos son obligatorios",
      });
    }

    if (Number.isNaN(Number(stock)) || Number.isNaN(Number(precio_unitario))) {
      return res.status(400).json({
        error: "Stock y precio_unitario deben ser numéricos",
      });
    }

    const results = await medicamentoModel.update(req.params.id, {
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      stock: Number(stock),
      precio_unitario: Number(precio_unitario),
    });

    if (!results || results.affectedRows === 0) {
      return res.status(404).json({
        error: "Medicamento no encontrado",
      });
    }

    res.json({
      message: "Medicamento actualizado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error al actualizar medicamento",
    });
  }
};
