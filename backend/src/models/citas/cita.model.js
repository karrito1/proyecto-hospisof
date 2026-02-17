// capa modelo para el modulo de citas

import { conx } from "../baseDatos.js";

const db = conx.promise();

export const citaModel = {
    

  // Listar todas las citas
  findAll: async () => {
    const sql = "SELECT * FROM cita ORDER BY fecha";
    const [rows] = await db.query(sql);
    return rows;
  },

  // Buscar cita por ID
  findById: async (id) => {
    const sql = "SELECT * FROM cita WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Crear cita
  create: async (data) => {
    const sql = "INSERT INTO cita SET ?";
    const [result] = await db.query(sql, [data]);
    return result;
  },

  // Eliminar cita
  delete: async (id) => {
    const sql = "DELETE FROM cita WHERE id = ?";
    const [result] = await db.query(sql, [id]);
    return result;
  },

  // Actualizar cita
  update: async (id, data) => {
    const sql = "UPDATE cita SET ? WHERE id = ?";
    const [result] = await db.query(sql, [data, id]);
    return result;
  }

};
