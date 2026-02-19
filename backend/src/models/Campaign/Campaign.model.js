// capa modelo para el modulo de campaña

import { conx } from "../baseDatos.js";

const db = conx.promise();

export const CampaignCTR = {

  // Listar todas las campañas
  findAll: async () => {
    const sql = "SELECT * FROM campaña ORDER BY fecha DESC";
    const [rows] = await db.query(sql);
    return rows;
  },

  // Buscar campaña por ID
  findById: async (id) => {
    const sql = "SELECT * FROM campaña WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Crear campaña
  create: async (data) => {
    const sql = "INSERT INTO campaña SET ?";
    const [result] = await db.query(sql, [data]);
    return result;
  },

  // Eliminar campaña
  delete: async (id) => {
    const sql = "DELETE FROM campaña WHERE id = ?";
    const [result] = await db.query(sql, [id]);
    return result;
  },

  // Actualizar campaña
  update: async (id, data) => {
    const sql = "UPDATE campaña SET ? WHERE id = ?";
    const [result] = await db.query(sql, [data, id]);
    return result;
  }

};
