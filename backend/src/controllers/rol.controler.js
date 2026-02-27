// controlador para citas

import { rolModel } from "../models/rol.model.js";

export const getRolesTodos = async (req, res) => {
  try {
    const results = await rolModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error en el sistema" + error,
    });
  }
};
export const getRolesID = async (req, res) => {
  try {
    const results = await rolModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error en el sistema " + error,
    });
  }
};
