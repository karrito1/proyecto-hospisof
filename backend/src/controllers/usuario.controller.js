// src/controllers/usuario.controller.js
import { usuarioModel } from "../models/usuario.model.js";
export const getUsuarios = async (req, res) => {
  try {
    const results = await usuarioModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los usuarios",
    });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const results = await usuarioModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al buscar el usuario",
    });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const data = {
      nombre: req.body.nombre,
      correo: req.body.correo,
      contrasena: req.body.contrasena,
      especialidad: req.body.especialidad,
      rol_id: req.body.rol_id,
    };
    const results = await usuarioModel.create(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrio un error en la inserción",
    });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const results = await usuarioModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrio un error al eliminar al usuario",
    });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const data = {
      nombre: req.body.nombre,
      correo: req.body.correo,
      contrasena: req.body.contrasena,
      especialidad: req.body.especialidad,
      rol_id: req.body.rol_id,
    };
    const results = await usuarioModel.update(req.params.id, data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrio un error al editar al usuario",
    });
  }
};
